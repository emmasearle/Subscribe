// Combined with SharedResources v2
var CONTENTNAVIGATIONTOPICTIMELINEURLHELPER = function () {

    function getInitialLoadUrlAndData(contentId, contentIdFromQueryString, itemCount, imagesPerItemCount, isTopicsPage, isSearchMode, currentTopicFilter, currentTopicType, currentTopicValue) {
        var url = '';
        var objPostData = null;
        if (isTopicsPage) {
            if (isSearchMode) {
                var keywordFilter = UTILITIES.getQueryStringParameterByName('q');
                if (UTILITIES.NullOrEmpty(keywordFilter)) {
                    return { data: objPostData, url: url };
                }
                url = '/topic-navigation-search/GetSectionBased/' + currentTopicFilter;
                objPostData = { keywordFilter: keywordFilter };
            } else {
                var isEntireSection = (contentId == null);
                if (isEntireSection == true) { // E.g. Initial page load.
                    url = '/topic-navigation/GetSectionBased/' + currentTopicType + '/' + currentTopicFilter;
                }
                else {
                    url = '/topic-navigation/GetContentUntilYear/' + currentTopicType + '/' + currentTopicFilter;
                }
                objPostData = { topicValue: currentTopicValue };
                if (contentId && StringUtils.isNullOrEmpty(contentId) === false) {
                    objPostData.contentId = contentId;
                }
            }
        } else {
            url = '/content-navigation/GetSectionBased/' + CONTENTIDENTIFIERS.currentSectionId() + ((typeof VOGUE !== 'undefined' && VOGUE.isRenderedInIFrame != null && VOGUE.isRenderedInIFrame() ? '/' + contentIdFromQueryString : '') || (typeof contentId === 'string' && contentId.length ? '/' + contentId : ''));
        }
        url += '?';
        var imageCountKeyValue = getImagesPerItemQueryStringKeyValue(imagesPerItemCount);
        if (imageCountKeyValue.length) {
            url += imageCountKeyValue + '&';
        }
        url += getItemCountQueryStringKeyValue(itemCount);
        return { data: objPostData, url: url };
    };

    function getPageUrlAndData(contentId, previous, nextPageNumber, itemCount, imagesPerItemCount, isTopicsPage, isSearchMode, currentTopicFilter, currentTopicType, currentTopicValue) {
        var url;
        var objPostData = null;
        if (isTopicsPage) {
            if (isSearchMode) {
                url = '/topic-navigation-search/GetSectionBasedPage/' + currentTopicFilter + '/' + nextPageNumber;
                objPostData = { keywordFilter: UTILITIES.getQueryStringParameterByName('q') };
            } else {
                url = '/topic-navigation/GetSectionBasedPage/' + currentTopicType + '/' + currentTopicFilter;
                objPostData = { topicValue: currentTopicValue };
                url += '/' + contentId + '/' + previous;
            }
        } else {
            url = '/content-navigation/GetSectionBasedPage/' + CONTENTIDENTIFIERS.currentSectionId();
            url += '/' + contentId + '/' + previous;
        }
        url += '?';
        var imageCountKeyValue = getImagesPerItemQueryStringKeyValue(imagesPerItemCount);
        if (imageCountKeyValue.length) {
            url += imageCountKeyValue + '&';
        }
        url += getItemCountQueryStringKeyValue(itemCount);
        return { data: objPostData, url: url };
    };

    function getImagesPerItemQueryStringKeyValue(count) {
        return keyValueIfNumber('imagesPerItem', count);
    };

    function getItemCountQueryStringKeyValue(count) {
        return keyValueIfNumber('count', count);
    };

    function keyValueIfNumber(key, value) {
        var keyValue = '';
        if (typeof value === 'number' && !isNaN(value) && value > 0) {
            keyValue = key + '=' + value;
        }
        return keyValue;
    };

    var pub = {
        getInitialLoadUrlAndData: getInitialLoadUrlAndData,
        getPageUrlAndData: getPageUrlAndData
    };

    return pub;
} ();;
/* -----------------------------*/
var ARTICLELISTING = function () {
    var pageType;
    var useManualBinding = false;
    
    if ($('.articleListing2012-CopyLed').length !== 0) {
        pageType = 'CopyLed';
    } else if ($('.articleListing2012-ImageLed').length !== 0) {
        pageType = 'ImageLed';
    } else if ($('.articleListing2012-Grid').length !== 0) {
        pageType = 'Grid';
        useManualBinding = true;
    } else if ($('.articleListing2012-Topics').length !== 0) {
        pageType = 'Topics';
    } else {
        return; // return null?
    }

    var gptAdUnitPath;
    function setGptAdUnitPath(path) {
        gptAdUnitPath = path;
    }

    // DOM element of article list
    var $articleList = $('#ArticleListingArticleList');

    // view model for article list
    var viewModel = {
        groups: ko.observableArray(),
        isGrouped: false,
        groupByDate: false,
        groupNameDateFunction: null,
        groupNameDateFormat: pageTypeIsImageLed() || pageTypeIsTopics() ? 'MMMM yyyy' : null,
        itemDateFunction: null
    };

    var windowScrollPosition = UTILITIES.getWindow().scrollTop();
    var moreResultsPending = false;
    var initialDataLoaded = false;

    // image width
    var IMAGES = function () {
        var imageWidth = {};

        function getImageWidth(itemType) {
            return imageWidth[itemType] || (imageWidth[itemType] = $('.' + itemType + ' .imageLink').width());
        };

        UTILITIES.getWindow().on('resize', function () {
            $.each(imageWidth, function (itemType, width) { // TODO: Is width param needed?
                imageWidth[itemType] = $('.' + itemType + ' .imageLink').width();
            });
        });

        // TODO: A variable named pub is already declared above in global scope. Is this meant to be an assignment rather than a declaration of a new var?
        var pub = {
            getImageWidth: getImageWidth
        };
        return pub;
    } ();

    var gptAdReadyFunctionArray = [];

    function addToGptAdReadyArray(callback) {
        gptAdReadyFunctionArray.push(callback);
    }

    var adsPlaced = false;

    function knockoutAfterRender() {
        placeAndRunGptAdsDebounced();
    }
    
    var placeAndRunGptAdsDebounced = $.debounce(100, function () {
        if ($articleList.children().length == 0) // Knockout lies about after render and items are not always rendered when event is fired
            placeAndRunGptAdsDebounced();
        else
            placeAndRunGptAds();
    });
    
    /*
     * NB: Current adlistbottom natives only work for CopyLed.  But we should probably remove this slot entirely
     * because it's in exactly the same geography as adlistbottom regular slots and DFP should handle this.
     */

    var $adBannerTop = GptAdSlots.getElementForSlot('adBannerTop');
    var $adListTop = GptAdSlots.getElementForSlot('adListTop');
    var $adListBottom = GptAdSlots.getElementForSlot('adListBottom');
    var $adListBottomNative = GptAdSlots.getElementForSlot('adListBottomNative'); /* NB - This is not bottom!  Should be changed and probably removed */

    var $adListTopPlaceholder = $('#incontentAd_adListTopPlaceholder');
    var $adListBottomPlaceholder = $('#incontentAd_adListBottomPlaceholder');
    var $adListBottomNativePlaceholder = $('#incontentAd_adListBottomNativePlaceholder'); /* NB - This is not bottom!  Should be changed and probably removed */

    var $adBannerTopInner = GptAdSlots.getInnerElementForSlot('adBannerTop');
    var $adListTopInner = GptAdSlots.getInnerElementForSlot('adListTop');
    var $adListBottomInner = GptAdSlots.getInnerElementForSlot('adListBottom');
    var $adListBottomNativeInner = GptAdSlots.getInnerElementForSlot('adListBottomNative'); /* NB - This is not bottom!  Should be changed and probably removed */

    function placeAndRunGptAds() {

        if (!adsPlaced) {
            adsPlaced = true;
            // Clear out GPT scripts so they are not run again
            $adBannerTopInner.empty();
            $adListTopInner.empty();
            $adListBottomInner.empty();
            $adListBottomNativeInner.empty();

            var $firstGroup = $articleList.find('.groupItem').first();
            var $firstGroupHeader = $firstGroup.find('.groupItemHeader').first();
            if ($firstGroupHeader.length > 0)
                $firstGroupHeader.after($adBannerTop);
            else
                $firstGroup.prepend($adBannerTop);
            var $listItems = $articleList.find('.listItem');
            var $secondGroup = $($articleList.find('.groupItem').get(1));
            
            // Ad List top
            if (pageTypeIsCopyLed() || pageTypeIsGrid() || pageTypeIsTopics()) {
                $listItems.first().before($adListTop);
                $adListTop.changeElementType('li');
                
                if (pageTypeIsGrid()) {
                    $firstGroup.find('.itemList').first().append($adListTopPlaceholder);
                } else {
                    $($listItems.get(2)).before($adListTopPlaceholder);

                }
                $adListTopPlaceholder.changeElementType('li');

                if (pageTypeIsCopyLed()) {
                    $articleList.find(".listItem:eq(1)").before($adListBottomNative);
                    $adListBottomNative.changeElementType('li');
                    $articleList.find(".listItem:eq(2)").before($adListBottomNativePlaceholder);
                    $adListBottomNativePlaceholder.changeElementType('li');
                }

            } else if (pageTypeIsImageLed()) {
                $($listItems.get(2)).prepend($adListTop);
                $($listItems.get(2)).append($adListTopPlaceholder);
            }

            // Ad List Bottom
            if (pageTypeIsCopyLed() || pageTypeIsTopics()) {
                $($listItems.get(4)).before($adListBottom);
                $adListBottom.changeElementType('li');                
                $($listItems.get(5)).before($adListBottomPlaceholder);
                $adListBottomPlaceholder.changeElementType('li');

                /*$($listItems.get(6)).before($adListBottomNative);
                $adListBottomNative.changeElementType('li');
                $($listItems.get(7)).before($adListBottomNativePlaceholder);
                $adListBottomNativePlaceholder.changeElementType('li');*/
            } else if (pageTypeIsImageLed()) {
                $($listItems.get(5)).prepend($adListBottom);
                $($listItems.get(5)).append($adListBottomPlaceholder);
            } else if (pageTypeIsGrid()) {
                if ($secondGroup.length > 0) {
                    $secondGroup.find('.itemList').first().prepend($adListBottom).append($adListBottomPlaceholder);
                }
            }
        }

        while (gptAdReadyFunctionArray.length > 0) {
            gptAdReadyFunctionArray[0]();
            gptAdReadyFunctionArray.shift();
        }
    }

    function gptAdRendered(e) {
        // handle gpt ads that are rendered
        if (e == null || e.slotInfo == null) {
            if (window.ALLOW_DEBUG)
                alert('gptAdRendered e failed');
            return;
        }

        if (e.sizeInfo != null && e.slotInfo != null && (e.slotInfo.slotName == "adListTop" || e.slotInfo.slotName == "adListBottom")) {
            var $ad = GptAdSlots.getElementForSlot(e.slotInfo.slotName);
            
            if (pageTypeIsImageLed() && $ad.attr('data-gpt-width') == "300") {
                $ad.parent().addClass('hasAd');
            }
/*
            else if ($ad.attr('data-gpt-width') == "970") {
                var moveCount = pageTypeIsGrid() || pageTypeIsImageLed() ? 999 : 3; // for grids, push them to the bottom of the group so they wont break the layout on various browser size
                $ad.moveItemsAroundThisDown(':not(.cnGptSlotOuter)', moveCount);
            }
*/
        }
    }

    //function adResponsiveOrBillboard1Loaded() {        
    //    // ad is displayed in 1st Billboard position
    //    // load the 2nd Billboard
    //    var $adResponsiveOrBillboard2 = $('#Content .adResponsiveOrBillboard2');
    //    if ($adResponsiveOrBillboard2.length) {
    //        var $adClone = $($adResponsiveOrBillboard2.clone(true));
    //        $adResponsiveOrBillboard2.remove();
    //        if (VOGUE.isRenderedInIFrame()) {
    //            var $currentItem = getCurrentArticleDomElement();
    //            if ($currentItem.length) {
    //                if (pageTypeIsCopyLed() || pageTypeIsImageLed() || pageTypeIsTopics()) {
    //                    var $listItems = $('.listItem');
    //                    $($listItems.get($listItems.index($currentItem) + 6)).before($adClone);
    //                    $adClone.changeElementType('li');
    //                } else if (pageTypeIsGrid()) {
    //                    var $listItems = $('.listItem');
    //                    var currentItemIndex = $listItems.index($currentItem);
    //                    var rowsFound = 0;
    //                    var $elm;
    //                    var previousTop;
    //                    var $firstOnRow;
    //                    $listItems.filter(':gt(' + (currentItemIndex - 1) + ')').each(function(idx, elm) {
    //                        $elm = $(elm);
    //                        if ($elm.offset().top !== previousTop) {
    //                            previousTop = $elm.offset().top;
    //                            rowsFound++;
    //                            if (rowsFound === 7) {
    //                                $firstOnRow = $elm;
    //                                return false;
    //                            }
    //                        }
    //                        // TODO: If it doesn't return false, shouldn't it return true?
    //                    });
    //                    if ($firstOnRow && $firstOnRow.length) {
    //                        $firstOnRow.before($adClone);
    //                    } else {
    //                        $articleList.find('.listItem').last().after($adClone);
    //                    }
    //                    $adClone.changeElementType('li');
    //                }
    //            }
    //        } else {
    //            if (pageTypeIsCopyLed() || pageTypeIsImageLed() || pageTypeIsTopics()) {
    //                $($articleList.find('.listItem').get(6)).before($adClone);
    //                $adClone.changeElementType('li');
    //            } else if (pageTypeIsGrid()) {
    //                var rowsFound = 0;
    //                var $elm;
    //                var previousTop;
    //                var $firstOnRow;
    //                $articleList.find('.listItem').each(function(idx, elm) {
    //                    $elm = $(elm);
    //                    if ($elm.offset().top !== previousTop) {
    //                        previousTop = $elm.offset().top;
    //                        rowsFound++;
    //                        if (rowsFound === 7) {
    //                            $firstOnRow = $elm;
    //                            return false;
    //                        }
    //                    }
    //                });
    //                if ($firstOnRow && $firstOnRow.length) {
    //                    $firstOnRow.before($adClone);
    //                } else {
    //                    $articleList.find('.listItem').last().after($adClone);
    //                }
    //                $adClone.changeElementType('li');
    //            }
    //        }
    //        $articleList.find('.adResponsiveOrBillboard2 iframe[data-src]').each(function () {
    //            AdIframeHost.loadWhenConditionsMet($(this));
    //        });
    //    }
    //}

    function addListItems(listItems, addToStart) {
        CONTENTNAVIGATIONVMHELPER.addItemsToViewModel(viewModel, listItems, addToStart);
    };
   
    //function loadAdResponiveOrBillboard1() {
    //    var $adResponsiveOrBillboard1 = $('#Content .adResponsiveOrBillboard1');
    //    if ($adResponsiveOrBillboard1.length) {
    //        var $adClone = $($adResponsiveOrBillboard1.clone(true));
    //        $adResponsiveOrBillboard1.remove();
    //        if (VOGUE.isRenderedInIFrame()) {
    //            var $currentItem = getCurrentArticleDomElement();
    //            if ($currentItem.length) {
    //                var $listItems;
    //                if (pageTypeIsCopyLed() || pageTypeIsImageLed() || pageTypeIsTopics()) {
    //                    $listItems = $articleList.find('.listItem');
    //                    $($listItems.get($listItems.index($currentItem) + 2)).before($adClone);
    //                    $adClone.changeElementType('li');
    //                } else if (pageTypeIsGrid()) {
    //                    $listItems = $articleList.find('.listItem');
    //                    var currentItemIndex = $listItems.index($currentItem);
    //                    var rowsFound = 0;
    //                    var $elm;
    //                    var previousTop;
    //                    var $firstOnRow;
    //                    $listItems.filter(':gt(' + (currentItemIndex - 1) + ')').each(function (idx, elm) {
    //                        $elm = $(elm);
    //                        if ($elm.offset().top !== previousTop) {
    //                            previousTop = $elm.offset().top;
    //                            rowsFound++;
    //                            if (rowsFound === 3) {
    //                                $firstOnRow = $elm;
    //                                return false;
    //                            }
    //                        }
    //                    });
    //                    if ($firstOnRow && $firstOnRow.length) {
    //                        $firstOnRow.before($adClone);
    //                        $adClone.changeElementType('li');
    //                    }
    //                }
    //            }
    //        } else {
    //            if (pageTypeIsCopyLed() || pageTypeIsImageLed() || pageTypeIsTopics()) {
    //                $($articleList.find('.listItem').get(2)).before($adClone);
    //                $adClone.changeElementType('li');
    //            } else if (pageTypeIsGrid()) {
    //                // TODO: Might be worth reviewing the variable names, possibly some re-declared vars here.
    //                var rowsFound = 0;
    //                var $elm;
    //                var previousTop;
    //                var $firstOnRow;
    //                $articleList.find('.listItem').each(function (idx, elm) {
    //                    $elm = $(elm);
    //                    if ($elm.offset().top !== previousTop) {
    //                        previousTop = $elm.offset().top;
    //                        rowsFound++;
    //                        if (rowsFound === 3) {
    //                            $firstOnRow = $elm;
    //                            return false;
    //                        }
    //                    }
    //                    // TODO: If it doesn't return false, shouldn't it return true? ANSWER: No, returning false tells jQuery to stop iterating through the items.
    //                });
    //                if ($firstOnRow && $firstOnRow.length) {
    //                    $firstOnRow.before($adClone);
    //                    $adClone.changeElementType('li');
    //                }
    //            }
    //        }
            
    //        $articleList.find('.adResponsiveOrBillboard1 iframe[data-src]').each(function () {
    //            AdIframeHost.loadWhenConditionsMet($(this));
    //        });
    //    }
    //};

    //function loadSkyMpu2() {
    //    var $adSkyMpu2 = $('.adSkyOrMpu2');
    //    if ($adSkyMpu2.length) {
    //        var $adClone = $($adSkyMpu2.clone(true));
    //        $adSkyMpu2.remove();
    //        if (VOGUE.isRenderedInIFrame()) {
    //            var $currentItem = getCurrentArticleDomElement();
    //            if ($currentItem.length) {
    //                var $listItems = $articleList.find('.listItem');
    //                if (pageTypeIsCopyLed() || pageTypeIsTopics()) {
    //                    $($listItems.get($listItems.index($currentItem) + 3)).before($adClone);
    //                    $adClone.changeElementType('li');
    //                } else if (pageTypeIsImageLed()) {
    //                    $listItems = $articleList.find('.listItem');
    //                    $($listItems.get($listItems.index($currentItem) + 3)).prepend($adClone);
    //                } else if (pageTypeIsGrid()) {
    //                    $listItems = $articleList.find('.listItem');
    //                    var currentItemIndex = $listItems.index($currentItem);
    //                    var rowsFound = 0;
    //                    var $elm;
    //                    var previousTop;
    //                    var $firstOnRow;
    //                    $listItems.filter(':gt(' + (currentItemIndex - 1) + ')').each(function (idx, elm) {
    //                        $elm = $(elm);
    //                        if ($elm.offset().top !== previousTop) {
    //                            previousTop = $elm.offset().top;
    //                            rowsFound++;
    //                            if (rowsFound === 4) {
    //                                $firstOnRow = $elm;
    //                                return false;
    //                            }
    //                        }
    //                    });
    //                    if ($firstOnRow && $firstOnRow.length) {
    //                        $firstOnRow.before($adClone);
    //                        $adClone.changeElementType('li');
    //                    }
    //                }
    //            }
    //        } else {
    //            if (pageTypeIsCopyLed() || pageTypeIsTopics()) {
    //                $($articleList.find('.listItem').get(3)).before($adClone);
    //                $adClone.changeElementType('li');
    //            } else if (pageTypeIsImageLed()) {
    //                $($articleList.find('.listItem').get(3)).prepend($adClone);
    //            } else if (pageTypeIsGrid()) {
    //                var rowsFound = 0;
    //                var $elm;
    //                var previousTop;
    //                var $firstOnRow;
    //                $articleList.find('.listItem').each(function (idx, elm) {
    //                    $elm = $(elm);
    //                    if ($elm.offset().top !== previousTop) {
    //                        previousTop = $elm.offset().top;
    //                        rowsFound++;
    //                        if (rowsFound === 4) {
    //                            $firstOnRow = $elm;
    //                            return false;
    //                        }
    //                    }
    //                });
    //                if ($firstOnRow && $firstOnRow.length) {
    //                    $firstOnRow.before($adClone);
    //                    $adClone.changeElementType('li');
    //                }
    //            }
    //        }

    //        $articleList.find('.adSkyOrMpu2 iframe[data-src]').each(function () {
    //            AdIframeHost.loadWhenConditionsMet($(this));
    //        });
    //    }
    //}

    //function adSkyOrMpu1Loaded() {
    //    var $adSkyOrMpu1 = $('.adSkyOrMpu1');
    //    // ad is displayed in 1st Sky/MPU position
    //    // styling this ad
    //    if (pageTypeIsImageLed()) {
    //        $adSkyOrMpu1.parent().addClass('hasAd');
    //    } else if (pageTypeIsTopics()) {
    //        hideOrDisplayShowImagesNextToAds($adSkyOrMpu1);
    //        UTILITIES.getWindow().on('resize', function () {
    //            hideOrDisplayShowImagesNextToAds($adSkyOrMpu1);
    //        });
    //    }
    //    // load the 2nd Sky/MPU
    //    loadSkyMpu2();
    //}

    //function adSkyOrMpu2Loaded() {
    //    var $adSkyOrMpu2 = $('.adSkyOrMpu2');
    //    if (pageTypeIsImageLed()) {
    //        $adSkyOrMpu2.parent().addClass('hasAd');
    //    } else if (pageTypeIsTopics()) {
    //        hideOrDisplayShowImagesNextToAds($adSkyOrMpu2);
    //        UTILITIES.getWindow().on('resize', function () {
    //            hideOrDisplayShowImagesNextToAds($adSkyOrMpu2);
    //        });
    //    }
    //}

    // check if more articles should be loaded and load some if so
    function checkLoadMoreArticles() {
        var scrollPosition = UTILITIES.getWindow().scrollTop();
        if (scrollPosition < windowScrollPosition) { // up
            // check if first item is in view
            if (getFirstItemInList().is(':in-viewport')) {
                loadNextPageOfResults();
            }
        } else { // down
            // check if last item is in view
            if (getLastItemInList().is(':in-viewport')) {
                loadPreviousPageOfResults();
            }
        }
        windowScrollPosition = scrollPosition;
    }

    function disableLoadOnScroll() {
        UTILITIES.getWindow().off('scroll.loadonscroll');
    };

    // we need to call this after the initial data load to ensure that the advertisements are displayed
    function displayAds() {
        // move the leaderboard and first Sky/MPU ads into the correct position
        // they are moved into different positions depending on whether the page is loaded in an iframe (expanded content navigation) or not
        if (VOGUE.isRenderedInIFrame()) {
            var $currentItem = getCurrentArticleDomElement();
            if ($currentItem.length) {
                // move leaderboard
                var $leaderBoard = $('#Content .adLeaderboardOrPushdown');
                if ($leaderBoard.length) {
                    var $leaderBoardClone = $($leaderBoard.clone(true));
                    $leaderBoard.remove();
                    if (pageTypeIsCopyLed() || pageTypeIsImageLed() || pageTypeIsTopics()) {
                        $currentItem.before($leaderBoardClone);
                        $leaderBoardClone.changeElementType('li');
                        log('Removing Leaderboard/Pushdown placeholder.');
                    } else if (pageTypeIsGrid()) {
                        // find the first item on the row of the current item, we need to insert the leaderboard just before it
                        var $insertBeforeItem = $currentItem;
                        var currentItemTop = $insertBeforeItem.offset().top;
                        var $elm;
                        $currentItem.prevAll().each(function (idx, elm) {
                            $elm = $(elm);
                            if ($elm.offset().top !== currentItemTop) {
                                return false;
                            } else {
                                $insertBeforeItem = $elm;
                            }
                        });
                        $insertBeforeItem.before($leaderBoardClone);
                        $leaderBoardClone.changeElementType('li');
                    }
                }
                // move 1st Sky/MPU
                var $skyMpu1 = $('#Content .adSkyOrMpu1');
                if ($skyMpu1.length) {
                    var $skyMpu1Clone = $($skyMpu1.clone(true));
                    $skyMpu1.remove();
                    if (pageTypeIsCopyLed() || pageTypeIsGrid()) {
                        $currentItem.before($skyMpu1Clone);
                        $skyMpu1Clone.changeElementType('li');
                    } else if (pageTypeIsImageLed()) {
                        var $listItems = $articleList.find('.listItem');
                        $($listItems.get($listItems.index($currentItem) + 1)).prepend($skyMpu1Clone);
                    }
                }
            }
        } else {
            // move leaderboard
          //  $articleList.find('h2').first().after($('.adLeaderboardOrPushdown'));
            // move 1st Sky/MPU
            var $skyMpu1 = $('#Content .adSkyOrMpu1');
            if ($skyMpu1.length) {
                var $skyMpu1Clone = $($skyMpu1.clone(true));
                $skyMpu1.remove();
                // insert the ad
                if (pageTypeIsCopyLed() || pageTypeIsGrid() || pageTypeIsTopics()) {
                    $articleList.find('.listItem').first().before($skyMpu1Clone);
                    $skyMpu1Clone.changeElementType('li');
                } else if (pageTypeIsImageLed()) {
                    $($articleList.find('.listItem').get(1)).prepend($skyMpu1Clone);
                }
            }
        }
        // load the ads
        $articleList.find('.adLeaderboardOrPushdown iframe[data-src],.adSkyOrMpu1 iframe[data-src]').each(function () {
            AdIframeHost.loadWhenConditionsMet($(this));
        });
        
    };

    function enableLoadOnScroll() {
        UTILITIES.getWindow().on('scroll.loadonscroll', $.throttle(500, checkLoadMoreArticles));
    };

    // fix sub-section headers to the top of the page as the user scrolls
    function fixSubSectionHeadersToTopOnScroll() {
        var fixedCssClass = 'fixed';
        var subSectionSelector = 'h2';

        var fixHeader = function(e) {
            var scrollTop = UTILITIES.getWindow().scrollTop();
            var $fixedHeader = $articleList.siblings(subSectionSelector + '.' + fixedCssClass);
            var $detectedCurrentSectionHeader = null;
            var fixedHeaderTopValue = TOP_FIXED_ELEMENT_HEIGHT();
            var housingHeaderHeight = TOP_FIXED_ELEMENT_HEIGHT();

            var $element = null;
            var elementPositionTop = null;
            $articleList.find(subSectionSelector).each(function(index, element) {
                $element = $(element);
                elementPositionTop = Math.floor($element.position().top);
                // if the top of the element is scrolled up out of view
                if (elementPositionTop < scrollTop + housingHeaderHeight) {
                    // this header may be the one we will use as the currently fixed header, so let's save a reference to it for later
                    $detectedCurrentSectionHeader = $element;
                } else if (index === 0) {
                    // if we are looking at the first one in the list, then we should remove it
                    $fixedHeader.remove();
                } else if ($fixedHeader.length > 0 && elementPositionTop - scrollTop - housingHeaderHeight < $fixedHeader.outerHeight()) {
                    // this header should be nudging the previous one out of view
                    fixedHeaderTopValue = (elementPositionTop - scrollTop - $fixedHeader.outerHeight()) + 'px';
                    return false;
                } else {
                    // this item is so far down the list that we don't have to worry about it or any others after it.
                    return false;
                }
            });
            // reposition the fixed header as necessary
            $fixedHeader.css({ 'top': fixedHeaderTopValue });
            // if we found a section header that should be fixed
            if ($detectedCurrentSectionHeader !== null) {
                // if there is no currently fixed header, or the detected current section header is different to the displayed current section header
                if ($fixedHeader.length === 0 || $fixedHeader.html() !== $detectedCurrentSectionHeader.html()) {
                    var $currentSectionHeader = $detectedCurrentSectionHeader.clone(true);
                    $currentSectionHeader.addClass(fixedCssClass);
                    if ($fixedHeader.length > 0) {
                        $fixedHeader.remove();
                    }
                    $currentSectionHeader.css({
                        'top': fixedHeaderTopValue,
                        'width': $articleList.find('h2').width() + 'px'
                    });
                    $articleList.before($currentSectionHeader);
                }
            }
            if (e && e.type === 'resize') {
                $fixedHeader.css({ 'width': $articleList.find('h2').width() + 'px' });
            }
        };
        // bind now
        fixHeader();
        // bind on scroll
        UTILITIES.getWindow().on('scroll.articleListingFixSubSectionHeaders resize.articleListingFixSubSectionHeaders', $.throttle(10, fixHeader));
    };

    function getAllArticles() {
        return $articleList.find('.listItem');
    };

    function getArticleCount() {
        return getAllArticles().length;
    };

    var _contentIdFromQueryString;
    function getContentIdFromQueryString() {
        return _contentIdFromQueryString || (_contentIdFromQueryString = UTILITIES.getQueryStringParameterByName('contentId'));
    };

    var _currentBaseTopicUrl;
    function getCurrentBaseTopicUrl() {
        return _currentBaseTopicUrl || (_currentBaseTopicUrl = $('.articleListing2012-Topics').attr('data-topicbaseurl'));
    };

    function getDefaultArticleDomElement() {
        return $('.listItem', $articleList).first();
    }

    function getCurrentArticleDomElement() {
        var contentid = getContentIdFromQueryString();
        if (contentid == "") {
            return getDefaultArticleDomElement();
        }
        var $currentItem = $('.listItem[data-contentid="' + getContentIdFromQueryString() + '"]', $articleList);
        if ($currentItem.length === 0) {
            $currentItem = getDefaultArticleDomElement();
        }
        return $currentItem;
    };

    var _currentKeywordFilter;
    function getCurrentKeywordFilter() {
        return _currentKeywordFilter || (_currentKeywordFilter = $('.articleListing2012-Topics').attr('data-keywordfilter'));
    };

    var _currentPageSize;
    function getCurrentPageSize() {
        return _currentPageSize || (_currentPageSize = parseInt($('.articleListing2012-Topics').attr('data-pagesize'), 10));
    };

    var _currentTopicFilter;
    function getCurrentTopicFilter() {
        return _currentTopicFilter || (_currentTopicFilter = $('.articleListing2012-Topics').attr('data-topicfilter'));
    };

    var _currentTopicType;
    function getCurrentTopicType() {
        return _currentTopicType || (_currentTopicType = $('.articleListing2012-Topics').attr('data-topictype'));
    };

    var _currentTopicValue;
    function getCurrentTopicValue() {
        return _currentTopicValue || (_currentTopicValue = $('.articleListing2012-Topics').attr('data-topicvalue'));
    };

    function getFirstItemInList() {
        return $articleList.find('.listItem').first();
    };

    var _firstVisibleItemIndex;
    function getFirstVisibleItemIndex() {
        if (typeof _firstVisibleItemIndex === 'undefined' || _firstVisibleItemIndex === null) {
            var found = false;
            _firstVisibleItemIndex = 0;
            if (VOGUE.isRenderedInIFrame()) {
                $.each(viewModel.groups(), function (grpIdx, grp) {
                    $.each(grp.items(), function (itmIdx, itm) {
                        if (itm.Id === getContentIdFromQueryString()) {
                            found = true;
                            return false;
                        }
                        _firstVisibleItemIndex++;
                    });
                    if (found) {
                        return false;
                    }
                });
            } else {
                found = true;
            }
            if (!found) {
                _firstVisibleItemIndex = null;
            }
        }
        return _firstVisibleItemIndex;
    };

    // Added optional itemType so that we could calculate the orientation
    // with the same business logic that calculates image url
    function getImageOrientation(images, itemType) {

        var orientation;
        if (images) {
            if (typeof (itemType) != "undefined") {
                var imageWidth = IMAGES.getImageWidth(itemType);
                var theImage = findAppropriateImage(images, imageWidth);
                if (theImage != null) {
                    if (theImage.Width > theImage.height) {
                        orientation = 'landscape';
                    } else if (theImage.Width < theImage.Height) {
                        orientation = 'portrait';
                    }
                }
            }
            if (!orientation) {
                $.each(images, function (index, image) {

                    if (image.Width > image.Height) {
                        orientation = 'landscape';
                    } else if (image.Width < image.Height) {
                        orientation = 'portrait';
                    }

                    if (orientation) {
                        return false;
                    }
                });
            }

        }
        return orientation;
    };

    function getImagesPerItemCount() {
        if (pageTypeIsImageLed()) {
            return 3;
        } else if (pageTypeIsTopics()) {
            return 4;
        } else {
            return 1;
        }
    };

    function getImageUrl(images, itemType) {
        var imageUrl = '';
        if (images) {
            var imageWidth = IMAGES.getImageWidth(itemType);
            var appropriateImage = findAppropriateImage(images, imageWidth);
            if (appropriateImage != null) {
                imageUrl = appropriateImage.Url;
            }
        }
        return imageUrl;
    };

    function findAppropriateImage(images, clientImageWidth) {

        var returnImage = null;

        $.each(images, function (index, image) {
            if (image.Height > image.Width) {
                returnImage = image;
                if (image.Width >= clientImageWidth) { // Stop when image is of the most appropriate size (don't go too much larger than needed)
                    return false;
                }
            }
        });

        // Fallback to landscape
        if (returnImage == null) {
            $.each(images, function (index, image) {
                if (image.Height < image.Width) {
                    returnImage = image;
                    if (image.Width >= clientImageWidth) { // Stop when image is of the most appropriate size (don't go too much larger than needed)
                        return false;
                    }
                }
            });
        }
        return returnImage;
    };

    // TODO: Currently since we're always adding to the end of the list, this works. But once we are using the expandable content navigation another method will need to be devised.
    function getItemIndex() {
        return $('.listItem').length;
    }

    function getLastItemInList() {
        return $articleList.find('.listItem').last();
    };

    function getNextPageNumber() {
        var articleCount = getArticleCount();
        if (articleCount % getCurrentPageSize() != 0) {
            return 0;
        } else {
            return (articleCount / getCurrentPageSize()) + 1;
        }
    }

    function setCurrentTopicFilterAndReload(filterName) {
        _currentTopicFilter = filterName;
        reloadAllData(true);
    }

    var _topicsPageInSearchMode;
    function topicsPageIsInSearchMode() {
        if (typeof (_topicsPageInSearchMode) == "undefined") {
            var searchModeString = $('.articleListing2012-Topics').attr('data-searchmode');
            _topicsPageInSearchMode = typeof searchModeString !== 'undefined' && (searchModeString.toLowerCase() === 'true');
        }
        return _topicsPageInSearchMode;
    };

    function getPublishDateTimeString(publishDateTime) {
        return viewModel.itemDateFunction(publishDateTime);
    };

    function hideOrDisplayShowImagesNextToAds($adElement) {
        var hasAdCssClass = 'hasAd';
        var bottomOfAdY = $adElement.offset().top + $adElement.children('iframe').outerHeight(true);
        var $el;
        var $shows = $adElement.nextAll('.ShowWithPhotos,.ShowWithReportAndPhotos').add($adElement.parent().closest('li').nextAll().find('.ShowWithPhotos,.ShowWithReportAndPhotos'));
        $shows.each(function (idx, el) {
            $el = $(el);
            if ($el.offset().top <= bottomOfAdY) {
                $el.addClass(hasAdCssClass);
            } else if ($el.hasClass(hasAdCssClass)) {
                $el.removeClass(hasAdCssClass);
            } else {
                return false;
            }
        });
    };

    function loadNextPageOfResults() {
        loadPageOfResults(false);
    };

    function loadPageOfResultsForSpecificContent(newFilter, contentId) {
        //only do this for topics and if we have valid data
        if (!contentId ||
			StringUtils.isNullOrEmpty(contentId) === true ||
			!newFilter ||
			StringUtils.isNullOrEmpty(newFilter) === true ||
			pageTypeIsTopics() === false ||
			(pageTypeIsTopics() === true
			&& topicsPageIsInSearchMode())) {
            log('asked to load a topic page for a specific piece of content, but the data was not valid or the page type does not support this behavior');
            return;
        }

        //set filter to specified (hopefully all or only filter)
        _currentTopicFilter = newFilter;
        reloadAllData(false, contentId);
    };

    function loadPageOfResults(previous) {
        if (moreResultsPending) {
            return;
        }

        if (pageTypeIsTopics() && topicsPageIsInSearchMode()) {
            if (!previous) {
                return; // Not supported
            }
            else if (getNextPageNumber() == 0) {
                return; // No more results
            }
        }

        // disable load on scroll
        disableLoadOnScroll();

        // set a flag to say that we are waiting for some data to load
        moreResultsPending = true;

        // if the user is scrolling up then we need to maintain scroll position in this hacky way
        var heightBeforeLoading = 0;
        if (!previous) {
            heightBeforeLoading = $articleList.outerHeight();
        }

        // add 'loading' message to UI
        var loadingCssClass = 'loading';
        var loadingHtml = '<li class="' + loadingCssClass + '"></li>';
        if (previous) {
            $articleList.append(loadingHtml);
        } else {
            $articleList.prepend(loadingHtml);
        }

        // build request URL and post data
        var urlAndData = CONTENTNAVIGATIONTOPICTIMELINEURLHELPER.getPageUrlAndData((previous ? getLastItemInList() : getFirstItemInList()).attr('data-contentid'), previous, getNextPageNumber(), null, getImagesPerItemCount(), pageTypeIsTopics(), topicsPageIsInSearchMode(), getCurrentTopicFilter(), getCurrentTopicType(), getCurrentTopicValue());

        var requestVerb = "POST";
        if (urlAndData.data == null) {
        	requestVerb = "GET";
        }

        $.ajax({
        	type: requestVerb,
        	url: urlAndData.url,
        	data: urlAndData.data,
        	success: loadPageOfResultsSuccess,
        	dataType: "json"
        });

        function loadPageOfResultsSuccess(data, textStatus, jqXHR) { // TODO: Is jqXHR param needed?
        	$articleList.children('.' + loadingCssClass).remove();
        	if (textStatus === 'success') {
        		if (data !== null && data.length > 0) {
        			addListItems(data, !previous);

        			// scroll position hack if the user is scrolling up
        			if (heightBeforeLoading) {
        				var heightAfterLoading = $articleList.outerHeight();
        				UTILITIES.getWindow().scrollTop(UTILITIES.getWindow().scrollTop() + heightAfterLoading - heightBeforeLoading);
        			}
        		}
        	}
        	enableLoadOnScroll();
        	moreResultsPending = false;
        	$articleList.trigger('pageload');
        };

    };

    function loadPreviousPageOfResults() {
        loadPageOfResults(true);
    };

    function pageTypeIsCopyLed() {
        return pageType === 'CopyLed';
    };

    function pageTypeIsGrid() {
        return pageType === 'Grid';
    };

    function pageTypeIsImageLed() {
        return pageType === 'ImageLed';
    };

    function pageTypeIsTopics() {
        return pageType === 'Topics';
    };

    function scrollToCurrentItem(callback) { // TODO: Is callback param needed?
        if (VOGUE.isRenderedInIFrame()) {
            var $scrollToElement;
            var $adIFrame = $('li.adLeaderboardOrPushdown>iframe');
            if (typeof $adIFrame !== 'undefined' && $adIFrame.length !== 0) {
                $scrollToElement = $adIFrame;
            } else {
                var $currentItem = getCurrentArticleDomElement();
                if (typeof $currentItem !== 'undefined' && $currentItem.length !== 0) {
                    $scrollToElement = $currentItem;
                }
            }
            scrollToElement($scrollToElement);
        }
    };

    function scrollToContent(contentId) { // TODO: Is contentId param needed?
        var $currentItem = getCurrentArticleDomElement();
        if (typeof $currentItem !== 'undefined' && $currentItem.length !== 0) {
            scrollToElement($currentItem);
        }
    };

    function scrollToElement($scrollToElement) {
        if ($scrollToElement && $scrollToElement.length) {
            var fixedHeaderHeight = $scrollToElement.closest('ol').siblings('h2').outerHeight();
            var desiredScrollPosition = $scrollToElement.offset().top - fixedHeaderHeight;
            UTILITIES.getWindow().scrollTop(desiredScrollPosition);
        }
    }

    function scrollToItemList() {
        // TODO: This event often fires more than once when a filter option is clicked on a topic timeline page. Is that bad?
        UTILITIES.getWindow().scrollTop($articleList.offset().top);
    };

    function registerOnLoad(callback) {
        if (callback && typeof callback === 'function') {
            $articleList.on('load', callback);
        }
    };

    function registerOnPageLoad(callback) {
        if (callback && typeof callback === 'function') {
            $articleList.on('pageload', callback);
        }
    };

    function reloadAllData(shouldScroll, contentId) {
        //clear any existing items
        viewModel.groups.removeAll();

        shouldScroll = shouldScroll === true;

        // Set data URL and post data.
        var itemCount = null;
        if (pageTypeIsGrid()) {
            // this is bollocks. we need to load in a lot of items because if the list that an ad is displayed it has any items added to it later it will be redrawn and any ad within it will be removed.
            itemCount = VOGUE.isRenderedInIFrame() ? 140 : 100;
        }
        var urlAndData = CONTENTNAVIGATIONTOPICTIMELINEURLHELPER.getInitialLoadUrlAndData(contentId, getContentIdFromQueryString(), itemCount, getImagesPerItemCount(), pageTypeIsTopics(), topicsPageIsInSearchMode(), getCurrentTopicFilter(), getCurrentTopicType(), getCurrentTopicValue());

        //scroll to list if asked, to see it loading
        if (shouldScroll) {
            scrollToItemList();
        }

        var requestVerb = "POST";
        if (urlAndData.data == null) {
			requestVerb = "GET";
		}

        $.ajax({
        	type: requestVerb,
        	url: urlAndData.url,
        	data: urlAndData.data,
        	success: reloadAllDataSuccess,
        	dataType: "json"
        });

        function reloadAllDataSuccess(data, textStatus, jqXHR) { // TODO: Is jqXHR param needed?
        	if (textStatus === 'success') {
        		// grouping
        		viewModel.isGrouped = data.IsGrouping;
        		viewModel.groupByDate = data.Groups.length === 0 && viewModel.isGrouped === true;

        		//date resolution decision
        		viewModel.groupNameDateFunction = function (navigationItem) {

        			if (data.GroupingDateResolution == "Month") {
        				return UTILITIES.getMonthName(navigationItem.DisplayDate) + ' ' + navigationItem.DisplayDate.getFullYear();
        			}
        			else if (data.GroupingDateResolution == "Year") {
        				return navigationItem.DisplayDate.getFullYear();
        			}

        			return UTILITIES.getDayOfWeek(navigationItem.DisplayDate, false) + ' ' + navigationItem.DisplayDate.getDate() + '<sup>' + UTILITIES.getNumberSuffix(navigationItem.DisplayDate.getDate()) + '</sup> ' + UTILITIES.getMonthName(navigationItem.DisplayDate);
        		};

        		viewModel.itemDateFunction = function (publishDateTime) {
        			if (publishDateTime && typeof publishDateTime.getDate === 'function') {
        				if (data.GroupingDateResolution == "Month") {
        					return publishDateTime.getDate() + '<sup>' + UTILITIES.getNumberSuffix(publishDateTime.getDate()) + '</sup>' + ' ' + UTILITIES.getMonthName(publishDateTime) + ' ' + publishDateTime.getFullYear();

        				} else if (data.GroupingDateResolution == "Year") {
        					return UTILITIES.getMonthName(publishDateTime);
        				}
        				//default is day resolution, but if <12 hours show relative time
        				var dateTimeString = '';
        				var timespan = new TimeSpan(new Date() - publishDateTime);
        				var timespanMilliseconds = timespan.getTotalMilliseconds();
        				if (timespanMilliseconds <= 60000) { // 1 minute
        					dateTimeString = 'just now';
        				} else if (timespanMilliseconds <= 3600000) { // 60 minutes
        					dateTimeString = timespan.getMinutes() + ' minutes ago';
        				} else if (timespanMilliseconds <= 5400000) { // 90 minutes
        					dateTimeString = (timespan.getMinutes() + 60) + ' minutes ago';
        				} else if (timespanMilliseconds <= 43200000) { // 12 hours
        					var hours = timespan.getHours();
        					dateTimeString = hours + ' hour' + (hours == 1 ? '' : 's') + ' ago';
        				} else if (timespanMilliseconds <= 86400000) { // 24 hours
        					dateTimeString = publishDateTime.toString('h:mm tt');
        				} else {
        					dateTimeString = publishDateTime.getDate() + '<sup>' + UTILITIES.getNumberSuffix(publishDateTime.getDate()) + '</sup>' + ' ' + UTILITIES.getMonthName(publishDateTime) + ' ' + publishDateTime.getFullYear();
        				}
        				return dateTimeString;
        			}
        			return null;
        		};

        		// list items
        		if (data !== null && data.Items.length > 0) {
        			addListItems(data.Items, false);
        		}
        		else if (data !== null && pageTypeIsTopics() && topicsPageIsInSearchMode() && !data.Items.length) {
        			// TODO - Should probably use knockout here, but this was done on launch day!
        			$articleList.before('<p class="noSearchResults">Sorry, there were no results found for <strong>' + objPostData.keywordFilter + '</strong></p>');
        		}

        		// display advertisements
        		displayAds();

        		// scroll to the 'current' item
        		if (contentId && StringUtils.isNullOrEmpty(contentId) === false)
        			scrollToContent(contentId);
        		else
        			scrollToCurrentItem();

        		// enable load on scroll
        		enableLoadOnScroll();

        		// enable fixed headers on scroll
        		fixSubSectionHeadersToTopOnScroll();

        		//scroll to list if asked, now that items are in
        		if (shouldScroll) {
        			scrollToItemList();
        		}

        		if (!initialDataLoaded) {
        			initialDataLoaded = true;
        			$articleList.trigger('load');
        		}
        	}
        };

    };

    (function () {
        function insertPromotionsIntoArticleList() {
            var promotionCssClass = 'promotion';
            // check if the promotions are already in the list
            if ($('.' + promotionCssClass, $articleList).length > 0) {
                // they do, so do nothing
                return;
            }
            // see if we can find the current article within the navigation
            var $currentArticleInList = getCurrentArticleDomElement();
            if ($currentArticleInList.length === 0) {
                // current article not found in list so don't do anything
                return;
            }
            // get the articles that come after the current article in the article list
            var $allArticles = getAllArticles();
            var $articlesAfterCurrentArticle = $allArticles.filter(':gt(' + $allArticles.index($currentArticleInList) + ')');
            if ($articlesAfterCurrentArticle.length === 0) {
                // there are no navigation items after the current one, so do nothing
                return;
            }

            // insertion point configuration
            var insertionIndex = 14;

            // check if there is enough articles in the list now to allow for insertion of the promotions
            if ($articlesAfterCurrentArticle.length < insertionIndex) {
                // there aren't. nothing we can do now.
                return;
            }

            // figure out if we need to insert the promotions or if they already exist, etc.
            var promotionHtml = '<li class="' + promotionCssClass + '"><p>Vogue promotions</p><ul>';
            var thumbnailHtml = '<ul class="promotionThumbnails">';
            $.each(VOGUE.promButtons.data, function (idx, dataItem) {
                promotionHtml += '<li class="promotionItem"><a href="' + dataItem.LinkUrl + '"><img src="' + dataItem.WideImgSrc + '" /></a><div class="promotionText"><h3 class="title"><a href="' + dataItem.LinkUrl + '">' + dataItem.Title + '</a></h3><p class="teaser"><a href="' + dataItem.LinkUrl + '">' + dataItem.Teaser + '</a></p></div></li>';
                thumbnailHtml += '<li class="thumbnailItem"><img src="' + dataItem.ThumbnailSrc + '" /></li>';
            });
            thumbnailHtml += '</ul>';
            promotionHtml += '</ul>' + (VOGUE.promButtons.data.length > 1 ? thumbnailHtml : '') + '</li>';
            $($articlesAfterCurrentArticle.get(insertionIndex)).after($(promotionHtml));

            // set up events on the thumbnails
            $('.' + promotionCssClass + ' .thumbnailItem').on('click mouseover', function () {
                $($('.' + promotionCssClass + ' .promotionItem').removeClass('displayed').get($(this).index())).addClass('displayed');
            });

            // randomly display one of the promotions
            $($('.' + promotionCssClass + ' .promotionItem').get(Math.floor(Math.random() * VOGUE.promButtons.data.length))).addClass('displayed');
        };

        // initialise
        $(function () {
            // if there is some data to work with and the right sort out page layout for promotion button insertion
            if (typeof VOGUE !== 'undefined' && VOGUE.promButtons && VOGUE.promButtons.hasData() && (pageTypeIsCopyLed() || pageTypeIsImageLed())) {
                // add promotions to the article list
                registerOnLoad(insertPromotionsIntoArticleList);
                registerOnPageLoad(insertPromotionsIntoArticleList);
            }
        });
    })();

    var existingItemsMap = {};
    function onRebindNeeded() {
        
        // TODO: see what 'pageType' we have, and perform different bindings
        for (var i = 0; i < viewModel.groups().length; i++) {
            var group = viewModel.groups()[i];
            // see if the group already exists. If it does, do not re-add it
            var groupKey = group.FirstContentId + group.GroupName;

            var itemList = existingItemsMap[groupKey];
            if (!itemList) {
                group.items.subscribe(function () {
                    onRebindNeeded();
                });

                $articleList.append($('<li class="groupItem"/>')
                    .append($('<h2 class="groupItemHeader"/>').
                        text(group.GroupName)
                    ).append(itemList = $('<ol class="itemList"/>')));

                existingItemsMap[groupKey] = itemList;
            }
            itemList.empty(); // lame, but easy. ideally we'd only readd the elements that changed.

            for (var j = 0; j < group.items().length; j++) {
                var item = group.items()[j];

                var itemElem;
                itemList.append(itemElem = $("<li/>").
                    attr("class", item.Type + " listItem clearfix").
                    attr("data-contentid", item.Id)
                );
                if (item.Images && item.Images.length > 0) {
                    itemElem.append($("<div/>").
                        addClass("imageContainer").
                        append($("<a/>").
                            attr("class", "imageLink " + ARTICLELISTING.getImageOrientation(item.Images[0])).
                            attr("href", item.Url).
                            attr("target", "_top").
                            append($("<img/>").
                                attr("src", ARTICLELISTING.getImageUrl(item.Images[0], item.Type))
                            )
                        )
                    );
                }
                itemElem.append($("<h3/>").
                    addClass("title").
                    append($("<a/>").
                        attr("href", item.Url).
                        text(item.Title).
                        attr("target", "_top")
                    )
                );
            }
        }
        if (viewModel.groups().length > 0) {
            setTimeout(placeAndRunGptAds, 200);
        }
    }

    // initialise on load
    $(function () {
        // magic - scarta: knockout way causes entire page to rebind, which makes advertising disappear
        if (useManualBinding) {
            viewModel.groups.subscribe(function () {
                onRebindNeeded();
            });
        } else {
            ko.applyBindings(viewModel, document.getElementById('ArticleListingArticleList'));
        }

        // load initial data
        reloadAllData();

        //TODO: replace with new GPT ads
        UTILITIES.getWindow().on('AdIframeLoaded', function (e, iframe) {
            if (iframe) {
                var $iframe = $(iframe);
                if ($iframe.parent().hasClass('adSkyOrMpu1')) {
                    adSkyOrMpu1Loaded();
                    // delete the billboard ads
                    log('Ad displayed in 1st Sky/MPU position, removing all Billboard position ads.');
                    $('#Content .adResponsiveOrBillboard').remove();
                } else if ($iframe.parent().hasClass('adSkyOrMpu2')) {
                    adSkyOrMpu2Loaded();
                } else if ($iframe.parent().hasClass('adResponsiveOrBillboard1')) {
                    adResponsiveOrBillboard1Loaded();
                }
            }
        }).on('AdIframeRemoving', function (e, iframe) {
            if (iframe) {
                var $iframe = $(iframe);
                if ($iframe.parent().hasClass('adSkyOrMpu1')) {
                    loadAdResponiveOrBillboard1();
                    log('Ad not displayed in 1st Sky/MPU position, removing second MPU position ad.');
                    $('#Content .adSkyOrMpu2').remove();
                } else if ($iframe.parent().hasClass('adResponsiveOrBillboard1')) {
                    $('#Content .adResponsiveOrBillboard2').remove();
                }
            }
        });
    });

    var pub = {
        getImageOrientation: getImageOrientation,
        getImageUrl: getImageUrl,
        getItemIndex: getItemIndex,
        getPublishDateTimeString: getPublishDateTimeString,
        setCurrentTopicFilterAndReload: setCurrentTopicFilterAndReload,
        reloadAllData: reloadAllData,
        loadPageOfResultsForSpecificContent: loadPageOfResultsForSpecificContent,
        addToGptAdReadyArray: addToGptAdReadyArray,
        knockoutAfterRender: knockoutAfterRender,
        gptAdRendered: gptAdRendered,
        setGptAdUnitPath: setGptAdUnitPath
    };
    return pub;
} ();

/* START: Newsletter sign up */
$(function () {
    function onHiddenFormClose() {
        $('.newsletterSignUp').removeClass('open');
    };

    function onHiddenFormOpen() {
        $('.newsletterSignUp').addClass('open');
    };

    function toggleFormDisplay(expandButton) {
        if (expandButton.html() == 'Yes, Please') {
            //expand and change text
            expandButton.html("Maybe later");
            $(".newsletterSignUp .hiddenForm").slideDown('slow');
            onHiddenFormOpen();
        }
        else {
            //collapse and change text
            expandButton.html("Yes, Please");
            $(".newsletterSignUp .hiddenForm").slideUp('slow', onHiddenFormClose);
            onHiddenFormClose();
        }
    }

    $(".newsletterSignUp .signUp").click(function () {
        //validate
        var newsletters = new Array();
        $(".newsletterSignUp ul li").each(function () {
            var item = $(this);
            if (item.hasClass('selected')) {
                newsletters.push(item.attr('data-listName'));
            }
        })
        if (newsletters.length == 0) {
            alert('No Newsletters selected');
            return;
        }
        var canContact = $(".newsletterSignUp #canContact").is(':checked');
        var emailRegX = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        var email = $(".newsletterSignUp .emailInput").val();
        if (!emailRegX.test(email)) {
            $(".newsletterSignUp .email .validation").css('display', 'inline');
            return;
        }
        else {
            $(".newsletterSignUp .noButton").css('display', 'none');
            $(".newsletterSignUp #expandButton").css('display', 'none');
            $(".newsletterSignUp .email .validation").css('display', 'none');
            $(".newsletterSignUp .response").css('display', 'block');
            var queryString = "?email=" + encodeURIComponent(email) + "&newsletters=" + newsletters.toString() + "&canContact=" + canContact;
            $.getJSON("/controllers/newslettersignup/signup" + queryString, function (data) {
                $(".newsletterSignUp .response .loadingGif").css('display', 'none');
                if (!data.Success) {
                    $(".newsletterSignUp .responseText").html("<h4>Sorry</h4>" + data.Error)
                }
                $(".newsletterSignUp .responseText").css('display', 'block');
            });
        }
    });


    $(".newsletterSignUp #expandButton").click(function (e) {
        toggleFormDisplay($(this));
    });

    $(".newsletterSignUp ul li").click(function () {
        var item = $(this);
        if (item.hasClass('selected')) {
            //remove selected class
            item.removeClass('selected');
        }
        else {
            //add selected class
            item.addClass('selected');
        }
    });

    $(".newsletterSignUp .emailInput").click(function () {
        var item = $(this);
        if (item.val() == "your email") {
            item.val("");
            item.css('color', '#000000');
        }
    });

    $(".newsletterSignUp .noButton").click(function () {
        $(".newsletterSignUp").slideUp('slow', onHiddenFormClose);
        //write cookie to say do not show again
        $.cookie("newsletter", "hide", { expires: 730 });
        onHiddenFormClose();
    });

    $(".newsletterSignUp .response .close .button").click(function () {
        $(".newsletterSignUp").slideUp('slow', onHiddenFormClose);
        //write cookie to say do not show again
        $.cookie("newsletter", "hide", { expires: 730 });
    });

    // Init newsletter
    (function () {
        var openNewsLetterForm = UTILITIES.getQueryStringParameterByName('newsletter') === "signup",
            hasNewsLetterCookie = $.cookie("newsletter") === "hide";

        if (openNewsLetterForm) {
            toggleFormDisplay($(".newsletterSignUp #expandButton"));
            if (hasNewsLetterCookie) {
                $.cookie("newsletter", null);
            }
        } else if (hasNewsLetterCookie) {
            $(".newsletterSignUp").css('display', 'none');
        }
    })();
});
/* END: Newsletter sign up*/

/* START: People & Parties/Blogs listing - people list */
$(function () {
    $(".peopleList .title").click(function (e) {
        ExpandContractContainer();
    });

    function ExpandContractContainer() {
        var title = $(".peopleList .title");
        if (title.hasClass('closed')) {
            //expand
            title.removeClass('closed');
            title.addClass('open');
            $(".peopleList .hiddenContent").slideDown('slow');
            $('.peopleList').css('border-bottom', '1px solid #ededed');
        }
        else {
            //collapse
            title.removeClass('open');
            title.addClass('closed');
            $(".peopleList .hiddenContent").slideUp('slow');
            $('.peopleList').css('border-bottom', '0px');
        }
    }

    $(".peopleList .letters li").click(function () {
        var elementId = "#section" + $(this).html();
        var scrollContainer = $(".peopleList .container");
        var pOffset = scrollContainer.scrollTop();
        pOffset = (pOffset + ($(elementId).position().top)) - scrollContainer.position().top;
        scrollContainer.animate({
            scrollTop: (pOffset)
        }, 800);
    });
});
/* END: People & Parties - people list*/;
/* -----------------------------*/

