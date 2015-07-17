var FashionShowNotifications = FashionShowNotifications || {};

FashionShowNotifications.IDENTITY_COOKIE_NAME = null;
FashionShowNotifications.SUBSCRIBE_CONTROLLER_BASE = null;
FashionShowNotifications.SEASON_ID = null;
FashionShowNotifications.subscribedShowIdMap = {};  // if the maps contain anything, then the show/city is subscribed
FashionShowNotifications.subscribedCityNameMap = {}; // if the maps contains null, then the show/city is not subscribed
FashionShowNotifications.strSubscribeButtonText = "Set";
FashionShowNotifications.strCancelButtonText = "Cancel";
FashionShowNotifications.onSubscriptionLoadCallbacks = [];

FashionShowNotifications.ANALYTICS_CATEGORY_PHOTO_ALERT = "Photo Alerts";

FashionShowNotifications.init = function (
    intSeasonId,
    strSubscribeControllerBase,
    strFashionControllerBase,
    strActionCookieName,
    strIdentityCookieName,
    blnUpdateAnyOnPagePanels,
    strSubscribeButtonText,
    strCancelButtonText) {

    if (typeof (blnUpdateAnyOnPagePanels) == "undefined") {
        blnUpdateAnyOnPagePanels = true;
    }

    if (typeof (strSubscribeButtonText) == "string") {
        FashionShowNotifications.strSubscribeButtonText = strSubscribeButtonText;
    }

    if (typeof (strCancelButtonText) == "string") {
        FashionShowNotifications.strCancelButtonText = strCancelButtonText;
    }

    FashionShowNotifications.IDENTITY_COOKIE_NAME = strIdentityCookieName;
    FashionShowNotifications.SUBSCRIBE_CONTROLLER_BASE = strSubscribeControllerBase;
    FashionShowNotifications.SEASON_ID = intSeasonId;

    $(document).ready(function () {
//        var testDiv = $(".mattTestStuff");
//        var otherTestDiv = $(".mattTestStuff2");

        // Identity
//        var identityCookieValue = $.cookie(strIdentityCookieName);
//        var identityValues = [];
//        if (identityCookieValue != null) {
//            identityValues = FashionShowNotifications.parseQueryString(identityCookieValue);
//        }

        if (blnUpdateAnyOnPagePanels) {
            FashionShowNotifications.loadSubscriptions(FashionShowNotifications.updateAllPanelSubscription, FashionShowNotifications.updateAllPanelSubscription, FashionShowNotifications.updateAllPanelSubscription);
        }

        
        //FashionShowNotifications.showInitialWelcomeMessage();
        //FashionShowNotifications.startCookiePolling();

        // Bind events
//        $('.reminderButton').each(function () {
//            FashionShowNotifications.SetReminderClick($(this), intSeasonId);
//        });
//        $('.unreminderButton').each(function () {
//            FashionShowNotifications.SetUnreminderClick($(this), intSeasonId);
//        });

        // Action
//        var actionCookieValue = $.cookie(strActionCookieName);
//        if (actionCookieValue != null) {
//            $.cookie(strActionCookieName, null);
//            var values = FashionShowNotifications.parseQueryString(actionCookieValue);
//            var strMessage = "";
//            switch (values.action) {
//                case "SubscribeToSeason":
//                    break;
//                case "SubscribeToShow":
//                    strMessage = "<p>You have successfully subscribed to the following seasons:</p>";
//                    strMessage += "<ul>";
//                    $(values.ids.split(",")).each(function () {
//                        strMessage += "<li>" + $(this)[0] + "</li>";
//                    });
//                    strMessage += "</ul>";
//                    break;
//                case "SubscribeToCity":
//                    break;
//                case "UnsubscribeFromAll":
//                    break;
//            }
//        }

//        if (identityCookieValue != null) {

//        }
//        testDiv.addClass("js");
//        otherTestDiv.addClass("js");
    });
};

FashionShowNotifications.SetNotificationClick = function ($container, seasonId, showId) {
    if (!UTILITIES.NullOrEmpty($container)) {
        
        $container.find('.reminderButton').each(function () {
            FashionShowNotifications.SetReminderClick($(this), seasonId, showId);
        });
        $container.find('.unreminderButton').each(function () {
            FashionShowNotifications.SetUnreminderClick($(this), seasonId, showId);
        });
    }
};

FashionShowNotifications.SetReminderClick = function ($element, seasonId, showId) {
    if (!UTILITIES.NullOrEmpty($element)) {
        $element.on('click.ReminderButton', function (e) {
            showId = showId || +($(this).closest("[data-showid]").attr("data-showid"));
            seasonId = seasonId || +($(this).closest("[data-seasonid]").attr("data-seasonid"));
            FashionShowNotifications.subscribeToShow(seasonId, showId, $(this).closest("[data-showid]"));
            e.stopPropagation();
            if (window.HomepagePanels && typeof (window.HomepagePanels.Track) == "function") {
                window.HomepagePanels.Track("Hompage Alerts", "Set Alert", "Hompage Alerts");
            }
        });
    }
};

FashionShowNotifications.SetUnreminderClick = function ($element, seasonId, showId) {
    if (!UTILITIES.NullOrEmpty($element)) {
        $element.on('click.UnreminderButton', function (e) {
            showId = showId || +($(this).closest("[data-showid]").attr("data-showid"));
            seasonId = seasonId || +($(this).closest("[data-seasonid]").attr("data-seasonid"));
            FashionShowNotifications.unsubscribeFromShow(seasonId, showId, null, $(this).closest("[data-showid]"));
            e.stopPropagation();
        });
    }
};


FashionShowNotifications.subscribeToShow = function (seasonId, showId, $el, callback) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // no auth details, show the login popup
        POPUP.displayPopup("/_marketResources/StandaloneContent/FashionShowSubscriptions/?seasonId=" + seasonId + "&showId=" + showId);
    } else {
        // we have auth details, just show a spinner and send the ajax request
        FashionShowNotifications.setPanelStatus(showId, "settingreminder");
        var commandUrl = FashionShowNotifications.SUBSCRIBE_CONTROLLER_BASE + "/shows/subscribe?" + "userId=" + authDetails.id + "&authToken=" + authDetails.authToken + "&showId=" + showId + "&seasonId=" + seasonId;
        $.ajax({
            url: commandUrl,
            success: function (objData) {
                var worked = (objData.Result == "Success");
                if (worked) {
                    FashionShowNotifications.setPanelStatus(showId, "reminderset", $el);
                    FashionShowNotifications.SetNotificationClick($el);
                    FashionShowNotifications.subscribedShowIdMap[showId] = true;
                } else {
                    FashionShowNotifications.setPanelStatus(showId, "noreminder", $el);
                    FashionShowNotifications.SetNotificationClick($el);
                }
                CNUTIL.callIfFunction(callback);
            }
        });
    }
};

FashionShowNotifications.startCookiePolling = function() {
    var lastAuth = FashionShowNotifications.getAuthInfo();
    if (lastAuth != null) return;
    FashionShowNotifications.cookiePollingInterval = setInterval(function() {
        var authDetails = FashionShowNotifications.getAuthInfo();
        if (authDetails != null) {
            FashionShowNotifications.showEmailConfirmed();
            FashionShowNotifications.updateAllPanelSubscription();
            FashionShowNotifications.stopCookiePolling();
        }
    }, 250);
};

FashionShowNotifications.stopCookiePolling = function() {
    clearInterval(FashionShowNotifications.cookiePollingInterval);
};

FashionShowNotifications.showInitialWelcomeMessage = function() {
    var authInfo = FashionShowNotifications.getAuthInfo();
    if (authInfo == null) {
        if (!FashionShowNotifications.hasHadWelcomeMessage()) FashionShowNotifications.showNewUserIntro();
    } else {
        if (window.location.search.toLowerCase().indexOf("welcomeback") >= 0) {
            FashionShowNotifications.showEmailConfirmed();
        } else {
            if (!FashionShowNotifications.hasHadLoginMessage()) FashionShowNotifications.showWelcomeBack(true);
        }
        $("#userEmailAddress").text(authInfo.emailAddress);

    }
};

FashionShowNotifications.showNewUserIntro = function() {

    function getScrollOffsetDistance() {
        return ($(".shows header").outerHeight(true) * -1) + 1;
    }

    ;
    FashionShowNotifications.setWelcomeMessage($("<div/>").
        append("Please set your Photo Alerts here in order that we can notify you by email when each of your shows goes live. <a class=\"setAlertsIntroButton\">Set Photo Alerts</a>"),
        "welcome",
        true
    );
    $(".setAlertsIntroButton").click(function() {
        SMOOTHSCROLL.scrollToAnchor(null, getScrollOffsetDistance(), false, null, $($(".fashionShow.noImageAvailable:visible").get(0)));
    });
};

FashionShowNotifications.showWelcomeBack = function (force) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    var sessionCookie = FashionShowNotifications.hasHadWelcomeMessage();

    if (force || !sessionCookie) {
        var $container = $("#welcomeBack");
        if (authDetails == null) {
            $container.empty().hide();
        } else {
            FashionShowNotifications.setWelcomeMessage($("<div/>").
                append("Welcome back ").
                append($("<span/>").
                    addClass("email").
                    text(authDetails.emailAddress)
                ).
                append(". ").
                append($("<a/>").
                    attr("href", "#").
                    text("Not you?").
                    click(function (e) {
                        e.preventDefault();
                        window.location.href = window.location.pathname + "?deauth=1";
                    })
                ),
                "login",
                true
            );
        }
    }
};

FashionShowNotifications.resetWelcomeMessageCookie = function() {
    $.cookie("FashionShowSubscription.HadWelcomeMessage", "", { path: "/" });
};

FashionShowNotifications.setWelcomeMessageCookie = function(state) {
    $.cookie("FashionShowSubscription.HadWelcomeMessage", state, { path: "/" });
};

FashionShowNotifications.hasHadWelcomeMessage = function() {
    return $.cookie("FashionShowSubscription.HadWelcomeMessage") == "welcome";
};

FashionShowNotifications.hasHadLoginMessage = function() {
    return $.cookie("FashionShowSubscription.HadWelcomeMessage") == "login";
};

FashionShowNotifications.showEmailConfirmed = function() {
    FashionShowNotifications.resetWelcomeMessageCookie();
    FashionShowNotifications.setWelcomeMessage($("<div/>").
        append("Your email address has now been confirmed.<br />You may now set Photo Alerts for as many shows as you like."),
        "login",
        true
    );

    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails != null) {
        $("#userEmailAddress").text(authDetails.emailAddress);
    }
};

FashionShowNotifications.setWelcomeMessage = function ($content, messageType, showReminderIcon) {
    FashionShowNotifications.resetWelcomeMessageCookie();
    var $container = $("#welcomeBack").empty();

    if (showReminderIcon) {
        $container.append($("<div/>").addClass("reminderIcon"));
    }
    //    $container.append($("<div/>").
    //        addClass("closeButton").
    //        click(function () {
    //            $("#welcomeBack").hide();
    //            $("#welcomeBackContainer").hide();
    //            FashionShowNotifications.setWelcomeMessageCookie(messageType);
    //        })
    //    );
    $container.append($content);
    $("#welcomeBackContainer").css("display", "block");
};

FashionShowNotifications.loadSubscriptions = function (onLoadCallback, onErrorCallback, onNotAuthorisedCallback) {
    for (var key in FashionShowNotifications.subscribedCityNameMap) {
        delete FashionShowNotifications.subscribedCityNameMap[key];
    }
    for (var key in FashionShowNotifications.subscribedShowIdMap) {
        delete FashionShowNotifications.subscribedShowIdMap[key];
    }

    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        if (typeof (onNotAuthorisedCallback) == "function") {
            onNotAuthorisedCallback();
        }
    } else {
        // we have auth details, just show a spinner and send the ajax request
        var commandUrl = FashionShowNotifications.SUBSCRIBE_CONTROLLER_BASE + "/subscriptions/getSubscriptions?" + "userId=" + authDetails.id + "&authToken=" + authDetails.authToken + "&seasonId=" + FashionShowNotifications.SEASON_ID;
        $.ajax({
            url: commandUrl,
            success: function (objData) {
                
                var worked = (objData.Result == "Success");
                FashionShowNotifications.subscribedCityNameMap = {};
                FashionShowNotifications.subscribedShowIdMap = {};
                FashionShowNotifications.subscribedToSeason = false;

                for (var i = 0; i < objData.ShowIds.length; i++) {
                    FashionShowNotifications.subscribedShowIdMap[objData.ShowIds[i]] = true;
                }
                for (var i = 0; i < objData.CityNames.length; i++) {
                    FashionShowNotifications.subscribedCityNameMap[objData.CityNames[i]] = true;
                }
                FashionShowNotifications.subscribedToSeason = objData.Season;

                if (typeof (onLoadCallback) == "function") {
                    onLoadCallback();
                }

                for (var i = 0; i < FashionShowNotifications.onSubscriptionLoadCallbacks.length; i++) {
                    FashionShowNotifications.onSubscriptionLoadCallbacks[i]();
                }
            },
            error: function () {
                if (typeof (onErrorCallback) == "function") {
                    onErrorCallback();
                }
            }
        });
    }
};

FashionShowNotifications.updateAllPanelSubscription = function () {
    $(".fashionShow.noImageAvailable,.calendarEventItem.noImageAvailable").each(function (index, elem) {
        var $elem = $(elem);
        FashionShowNotifications.updatePanelElementSubscription($elem);        
    });
};

FashionShowNotifications.updatePanelElementSubscription = function ($elem) {
    var cityName = $elem.attr("data-cityName");
    var showId = $elem.attr("data-showId");
    var status = FashionShowNotifications.getReminderStatus(cityName, showId);
    FashionShowNotifications.setPanelStatus(null, status, $elem);
    FashionShowNotifications.SetNotificationClick($elem);
};

FashionShowNotifications.getReminderStatus = function (cityName, showId) {
    var citySubscription = FashionShowNotifications.subscribedCityNameMap[cityName] != null;
    var showSubscription = FashionShowNotifications.subscribedShowIdMap[showId] != null;
    return (citySubscription || showSubscription || FashionShowNotifications.subscribedToSeason) ? "reminderset" : "noreminder";
};

FashionShowNotifications.getAuthInfo = function () {
    var cookie = $.cookie(FashionShowNotifications.IDENTITY_COOKIE_NAME);
    if (cookie == null) return null;

    var cookieValues = FashionShowNotifications.parseQueryString(cookie);
    var id = cookieValues.id;
    var authToken = cookieValues.authToken;
    var email = cookieValues.email;

    if (id == null || authToken == null || email == null) return null;
    return {
        id: id,
        authToken: authToken,
        emailAddress: email
    };
};

FashionShowNotifications.showSubscriptionPopup = function (seasonId, options) {
    options = options || {};
    seasonId = seasonId == null ? FashionShowNotifications.SEASON_ID : seasonId;
    var url = "/_marketResources/StandaloneContent/FashionShowSubscriptions/?seasonId=" + seasonId;
    if (options.showCities) url += "&bulkPicker=1";
    if (options.citySubscribed) url += "&citySubscribed=" + escape(options.citySubscribed);
    if (options.seasonSubscribed) url += "&seasonSubscribed=1";
    FashionShowNotifications.showPopupAndUpdateOnClose(url);
};

FashionShowNotifications.showPopupAndUpdateOnClose = function(url) {
    POPUP.displayPopup(
        url,
        function() {
            if ($(".reminderList").is(":visible")) {
                POPUP.displayOverlay();
                FashionShowNotifications.loadSubscriptions(function() {
                    splashPageReloadReminders(function() { POPUP.hideOverlay(); });
                }, function() {
                    POPUP.hideOverlay();
                    splashPageReloadReminders(function() { POPUP.hideOverlay(); });
                });
            } else {
                FashionShowNotifications.loadSubscriptions(function() { FashionShowNotifications.updateAllPanelSubscription() }, function() { FashionShowNotifications.updateAllPanelSubscription() });
            }
        });
};

FashionShowNotifications.unsubscribeFromShow = function (seasonId, showId, cityName, $el, callback) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // no auth details, show the login popup
    } else {
        // we have auth details, just show a spinner and send the ajax request
        if ((!UTILITIES.NullOrUndefined(cityName) && FashionShowNotifications.subscribedCityNameMap[cityName] != null) || FashionShowNotifications.subscribedToSeason) {
            var popupOptions;
            if (FashionShowNotifications.subscribedCityNameMap[cityName] != null) {
                popupOptions = { citySubscribed: cityName };
            } else {
                popupOptions = { seasonSubscribed: true };
            }
            FashionShowNotifications.showSubscriptionPopup(seasonId, popupOptions);
            CNUTIL.callIfFunction(callback);
        } else {
            FashionShowNotifications.setPanelStatus(showId, "unsettingreminder", $el);
            var commandUrl = FashionShowNotifications.SUBSCRIBE_CONTROLLER_BASE + "/shows/unsubscribe?" + "userId=" + authDetails.id + "&authToken=" + authDetails.authToken + "&showId=" + showId + "&seasonId=" + seasonId;
            $.ajax({
                url: commandUrl,
                success: function (objData) {
                    var worked = (objData.Result == "Success");
                    if (worked) {
                        FashionShowNotifications.setPanelStatus(showId, "noreminder", $el);
                        FashionShowNotifications.SetNotificationClick($el);
                        delete FashionShowNotifications.subscribedShowIdMap[showId];
                    } else {
                        FashionShowNotifications.setPanelStatus(showId, "reminderset", $el);
                        FashionShowNotifications.SetNotificationClick($elem);
                    }
                    CNUTIL.callIfFunction(callback);
                }
            });
        }
    }
};

FashionShowNotifications.showAjaxResult = function (data, textStatus, jqXHR, emailAddress) {
    $(".emailConfirmSpinner").hide();
    $(".blurb:gt(0)").remove();
    if (data.Result == "Success") {        
        $(".blurb").html("An email confirmation has been sent to " + UTILITIES.htmlEncode(emailAddress) + ".<br /><br />Please click on the link inside the email to confirm that you own this email address.");
        $("fieldset").hide();
        $(".bottomControls").show();
    } else {
        $(".blurb").text("An error occurred whilst saving your subscription.");
    }
};

FashionShowNotifications.subscribeToShowWithRegistration = function (email, showId, seasonId) {
    var url = "/controllers/shows/subscribewithregistration?userEmail=" + encodeURIComponent(email) + "&seasonId=" + seasonId + "&showId=" + showId;
    $(".emailConfirmSpinner").css("display", "inline-block");
    $.ajax(url, {
        error: function (jqXHR, textStatus, errorThrown) {
            $(".emailConfirmSpinner").hide();
            $(".blurb").text("An error occurred whilst saving your subscription.");
        },
        success: function (data, textStatus, jqXHR) {
            FashionShowNotifications.showAjaxResult(data, textStatus, jqXHR, email);
            // window.AnalyticsUtils.trackEvent = function (category, action, optionalLabel, optionalValue) 
            AnalyticsUtils.trackEvent(FashionShowNotifications.ANALYTICS_CATEGORY_PHOTO_ALERT, "Popup Submit", data.IsNewUser ? "New User" : "Existing User");
        }
    });
};

FashionShowNotifications.subscribeToSeasonWithRegistration = function (email, seasonId) {
    var url = "/controllers/seasons/subscribewithregistration?userEmail=" + encodeURIComponent(email) + "&seasonId=" + seasonId;
    $(".emailConfirmSpinner").css("display", "inline-block");
    $.ajax(url, {
        error: function (jqXHR, textStatus, errorThrown) {
            $(".blurb").text("An error occurred whilst saving your subscription.");
            $(".emailConfirmSpinner").hide();
        },
        success: function (data, textStatus, jqXHR) {
            FashionShowNotifications.showAjaxResult(data, textStatus, jqXHR, email);
            // window.AnalyticsUtils.trackEvent = function (category, action, optionalLabel, optionalValue) 
            AnalyticsUtils.trackEvent(FashionShowNotifications.ANALYTICS_CATEGORY_PHOTO_ALERT, "Popup Submit", data.IsNewUser ? "New User" : "Existing User");
        }
    });
};

FashionShowNotifications.subscribeToCitiesWithRegistration = function(email, seasonId, cities) {
    if (cities.length == 0) return;
    $(".emailConfirmSpinner").css("display", "inline-block");
    var url = FashionShowNotifications.SUBSCRIBE_CONTROLLER_BASE + "/cities/subscribewithregistration?userEmail=" + encodeURIComponent(email) + "&seasonId=" + seasonId + "&cityNamesPsv=";
    for (var i = 0; i < cities.length; i++) {
        url += encodeURIComponent(cities[i] + "|");
    }
    $.ajax(url, {
        error: function(jqXHR, textStatus, errorThrown) {
            $(".emailConfirmSpinner").hide();
            $(".blurb").text("An error occurred whilst saving your subscription.");
        },
        success: function(data, textStatus, jqXHR) {
            FashionShowNotifications.showAjaxResult(data, textStatus, jqXHR, email);
        }
    });
};

FashionShowNotifications.pendingSeasonCitySubscriptions = 0;
FashionShowNotifications.subscribeToCity = function(seasonId, cityName) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // TODO show some kind of error
        return;
    }
    var url = "/controllers/cities/subscribe?seasonId=" + seasonId + "&cityName=" + encodeURIComponent(cityName) + "&userId=" + authDetails.id + "&authToken=" + authDetails.authToken;
    FashionShowNotifications.updatePendingSeasonCitySubscriptions(+1);
    $.ajax(url, {
        success: function(data, textStatus, jqXHR) {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            if (data.Result == "Success") {
                $(".reallyDoneButton").show();
            } else {
                $(".blurb").text("An error occurred whilst saving your subscription.");
            }
        },
        error: function() {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            pendingSeasonCitySubscriptions--;
        }
    });
};

FashionShowNotifications.unsubscribeFromCity = function(seasonId, cityName) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // TODO show some kind of error
        return;
    }
    var url = "/controllers/cities/unsubscribe?seasonId=" + seasonId + "&cityName=" + encodeURIComponent(cityName) + "&userId=" + authDetails.id + "&authToken=" + authDetails.authToken;
    FashionShowNotifications.updatePendingSeasonCitySubscriptions(+1);
    $.ajax(url, {
        success: function(data, textStatus, jqXHR) {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            if (data.Result == "Success") {
                $(".doneButton").show();
            } else {
                $(".blurb").text("An error occurred whilst saving your subscription.");
            }
        },
        error: function() {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            pendingSeasonCitySubscriptions--;
        }
    });
};

// The other subscribeToSeason method is too complicated, and makes assumptions about what UI stuff to do on success/fail
FashionShowNotifications.subscribeToSeasonSimple = function (onSuccess, onError) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // TODO show some kind of error
        return;
    }
    var url = "/controllers/seasons/subscribe?seasonId=" + FashionShowNotifications.SEASON_ID + "&userId=" + authDetails.id + "&authToken=" + authDetails.authToken;
    FashionShowNotifications.updatePendingSeasonCitySubscriptions(+1);
    $.ajax(url, {
        success: function (data, textStatus, jqXHR) {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            if (data.Result == "Success") {
                FashionShowNotifications.loadSubscriptions(); // TODO - This is inefficient, should just mod the existing collections
                onSuccess();
            } else {
                onError();
            }            
        },
        error: function () {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
        }
    });
}

FashionShowNotifications.subscribeToSeason = function(seasonId) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // TODO show some kind of error
        return;
    }
    var url = "/controllers/seasons/subscribe?seasonId=" + seasonId + "&userId=" + authDetails.id + "&authToken=" + authDetails.authToken;
    FashionShowNotifications.updatePendingSeasonCitySubscriptions(+1);
    $.ajax(url, {
        success: function(data, textStatus, jqXHR) {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            if (data.Result == "Success") {
                $(".doneButton").show();
            } else {
                $(".blurb").text("An error occurred whilst saving your subscription.");
            }
        },
        error: function() {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            pendingSeasonCitySubscriptions--;
        }
    });
};

FashionShowNotifications.unsubscribeFromSeason = function(seasonId) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // TODO show some kind of error
        return;
    }
    var url = "/controllers/seasons/unsubscribe?seasonId=" + seasonId + "&userId=" + authDetails.id + "&authToken=" + authDetails.authToken;
    FashionShowNotifications.updatePendingSeasonCitySubscriptions(+1);
    $.ajax(url, {
        success: function(data, textStatus, jqXHR) {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            if (data.Result == "Success") {
                $(".doneButton").show();
            } else {
                $(".blurb").text("An error occurred whilst saving your subscription.");
            }
        },
        error: function() {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            pendingSeasonCitySubscriptions--;
        }
    });
};
// The other unsubscribeFromSeasonSimple method is too complicated, and makes assumptions about what UI stuff to do on success/fail
FashionShowNotifications.unsubscribeFromSeasonSimple = function (onSuccess, onError) {
    var authDetails = FashionShowNotifications.getAuthInfo();
    if (authDetails == null) {
        // TODO show some kind of error
        return;
    }
    var url = "/controllers/seasons/unsubscribe?seasonId=" + FashionShowNotifications.SEASON_ID + "&userId=" + authDetails.id + "&authToken=" + authDetails.authToken;
    FashionShowNotifications.updatePendingSeasonCitySubscriptions(+1);
    $.ajax(url, {
        success: function (data, textStatus, jqXHR) {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
            if (data.Result == "Success") {
                FashionShowNotifications.loadSubscriptions(); // TODO - Inefficient
                onSuccess();
            } else {
                onError();
            }
        },
        error: function () {
            FashionShowNotifications.updatePendingSeasonCitySubscriptions(-1);
        }
    });
}

FashionShowNotifications.updatePendingSeasonCitySubscriptions = function (counterDelta) {
    FashionShowNotifications.pendingSeasonCitySubscriptions += counterDelta;
    if (FashionShowNotifications.pendingSeasonCitySubscriptions > 0) {
        $(".seasonCitySelectionSpinner").css("display", "inline-block");
    } else {
        $(".seasonCitySelectionSpinner").css("display", "none");
    }

};

FashionShowNotifications.setPanelStatus = function (showId, status, optionalPanelElement) {
    if (optionalPanelElement != null && !optionalPanelElement.hasClass("noImageAvailable")) return;
    var $panel = optionalPanelElement == null
        ? $("li.fashionShow.noImageAvailable[data-showid=" + showId + "]," + ".calendarEventItem.noImageAvailable[data-showid=" + showId + "]")
        : $(optionalPanelElement);
    // NOTE: We must update both panels, just in case the user has clicked A-Z

    $panel.each(function (index, elem) {
        var $panel = $(elem);
        var validStatuses = "reminderset noreminder settingreminder unsettingreminder";
        var $input = $panel.find(".reminderButton,.unreminderButton,.unreminderRemoveButton,.reminderSpinner");
        var $newInput;
        // status must be either: noreminder,settingreminder,reminderset,unsettingreminder
        if (status == "noreminder") {
            $newInput = $("<a/>").
                addClass("reminderButton").
                attr("title", "Be notified by email when photos become available").
                append($("<span />").text(FashionShowNotifications.strSubscribeButtonText));
            /*
            if (status == "settingreminder") {
            }
            */
        } else if (status == "settingreminder" || status == "unsettingreminder") {
            $newInput = $("<div/>").
                addClass("reminderSpinner");
        } else if (status == "reminderset") {
            $newInput = $("<a/>").
                addClass("unreminderButton").
                attr("title", "Remove this Photo Alert")
                .append($("<span />").text(FashionShowNotifications.strCancelButtonText));
        }
        $panel.removeClass(validStatuses);
        $panel.addClass(status);
        if ($input.length == 0)
            $panel.find(".notificationsHolder").append($newInput);
        else
            $input.replaceWith($newInput);
    });
};

FashionShowNotifications.addShows = function (objContainer, objJson, blnReplace) {
    if (typeof (blnReplace) == "undefined") {
        blnReplace = false;
    }
    if (blnReplace) {
        objContainer.children().remove();
    }
    var strMarkup = "";
    $(objJson.CalendarEvents).each(function (i) {
        strMarkup +=
            "<li class='" + (i % 5 == 0 ? "startRow" : "") + "' data-shows=''>"
            + "<p>" + this.Title + "</p>"
            + "<p>" + FashionShowNotifications.getDate(this.Time) + "</p>"
            + "</li>";
    });

    if (blnReplace) {
        objContainer.html(strMarkup);
    }
    else {
        objContainer.append(strMarkup);
    }
};

FashionShowNotifications.getDate = function (jsonDate) {
    var date = eval(jsonDate.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
    return date;
};

FashionShowNotifications.parseQueryString = function (strQueryString) {
    var splitValues = strQueryString.split("&");
    var returnValue = {};
    $(splitValues).each(function () {
        var nameValueSplit = $(this)[0].split("=");
        returnValue[nameValueSplit[0]] = nameValueSplit[1];
        //decodeURIComponent?
    });
    return returnValue;
};

var POPUP = POPUP || {};
POPUP.iFrameCssClass = "fsIFrame";
POPUP.overlayCssClass = "fsOverlay";
POPUP.popupLoadingSpinnerCssClass = "popupLoadingSpinner";
POPUP.displayIFrame = function (url) {
    var $iFrame = $("." + POPUP.iFrameCssClass);
    var horizontalMargin = 100;
    var iframeWidth = Math.min($(window).width() - horizontalMargin * 2, 700);
    var iframeLeft = ($(window).width() - iframeWidth) / 2;
    $("body").append("<iframe class=\"" + POPUP.iFrameCssClass + "\" frameborder=\"0\" />");
    $iFrame = $("." + POPUP.iFrameCssClass);
    $iFrame.css("left", iframeLeft).css("width", iframeWidth).css("top", $(window).scrollTop()).show();
    $iFrame.attr("src", url).slideDown();
};
POPUP.displayOverlay = function () {
    var $overlay = $("." + POPUP.overlayCssClass);
    if ($overlay.length == 0) {
        $("body").append("<div class=\"" + POPUP.overlayCssClass + "\" />");
        $overlay = $("." + POPUP.overlayCssClass);
        $overlay.click(function () { POPUP.hidePopup() });
    }
    $overlay.css("width", $(document).width()).css("height", $(document).height()).show();
    var $spinner = $("<div/>").
        addClass(POPUP.popupLoadingSpinnerCssClass).
        appendTo("body");
    $spinner.css("position", "absolute").
        css("left", $(window).scrollLeft() + ($(window).width() - $spinner.width()) / 2).
        css("top", $(window).scrollTop() + ($(window).height() - $spinner.height()) / 2);
};
POPUP.displayPopup = function (url, closeCallback) {
    POPUP.displayOverlay();
    POPUP.displayIFrame(url);
    POPUP.closeCallback = closeCallback;
};
POPUP.hideIFrame = function () {
    $("." + POPUP.iFrameCssClass).animate({ height: 0 }, "swing", function () { $("." + POPUP.iFrameCssClass).remove(); });
};
POPUP.hideOverlay = function () {
    $("." + POPUP.overlayCssClass).hide();
    $("." + POPUP.popupLoadingSpinnerCssClass).hide();
};
POPUP.hidePopup = function (isCancel) {
    if (isCancel == null) isCancel = false;
    POPUP.hideIFrame();
    POPUP.hideOverlay();
    if (!isCancel && POPUP.closeCallback != null) POPUP.closeCallback();
};
POPUP.setPopupHeight = function (height) {
    $("." + POPUP.iFrameCssClass).animate({ height: height }, 400, "swing");
    $("." + POPUP.popupLoadingSpinnerCssClass).remove();
};