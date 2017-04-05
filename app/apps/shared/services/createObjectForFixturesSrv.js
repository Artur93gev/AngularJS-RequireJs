define([], () => {
    'use strict';

    let createObjectForFixtures;

    angular.module('shared').service('createObjectForFixtures', createObjectForFixtures = () => {

        let _createObjectForRoundsDaysMaches = function(data, bool) {
            let newObj = {}, countOfChildes = 0, attr, prop;

            Object.defineProperties(newObj, {                                                                                  //parent object
                'id': {
                    value: data.CompetitionId,
                    enumarable: false
                },
                'name': {
                    value: data.CompetitionName,
                    enumarable: false
                },
                'checked': {
                    value: bool,
                    enumarable: false,
                    writable: true
                }
            });

            if (typeof data.RoundOrDates[0] != "undefined" && data.RoundOrDates[0].RoundNumber == 0) {                             // if sport don't contain rounds add child objects days
                if (data.RoundOrDates[0].MatchYearMonthDays.length > 0) {
                    for (attr in  data.RoundOrDates[0].MatchYearMonthDays) {
                        newObj[attr] = {};
                        Object.defineProperties(newObj[attr], {
                            'id': {
                                value: data.RoundOrDates[0].MatchYearMonthDays[attr].MatchDate,
                                enumarable: false
                            },
                            'name': {
                                value: data.RoundOrDates[0].MatchYearMonthDays[attr].MatchDate,
                                enumarable: false
                            },
                            'checked': {
                                value: bool,
                                enumarable: false,
                                writable: true
                            },
                            'isVisible': {
                                value: bool,
                                enumarable: false,
                                writable: true
                            },
                            'parentPosition': {
                                value: [attr],
                                enumarable: false
                            }
                        });
                        _createMachesByDay(data.RoundOrDates[0].MatchYearMonthDays[attr], newObj[attr], [attr], bool);    // add child objects muches
                    }
                }
            } else {
                if (data.RoundOrDates.length > 0) {                                                                                 //else  if sport contain rounds add child objects rounds
                    for (prop in  data.RoundOrDates) {
                        newObj[prop] = {};
                        Object.defineProperties(newObj[prop], {
                            'id': {
                                value: data.RoundOrDates[prop].RoundNumber,
                                enumarable: false
                            },
                            'name': {
                                value: data.RoundOrDates[prop].RoundNumber,
                                enumarable: false
                            },
                            'checked': {
                                value: bool,
                                enumarable: false,
                                writable: true
                            },
                            'isVisible': {
                                value: bool,
                                enumarable: false,
                                writable: true
                            },
                            'parentPosition': {
                                value: [prop],
                                enumarable: false
                            }
                        });
                        _createMachesByRound(data.RoundOrDates[prop], newObj[prop], prop, bool);                          // than add child objects days and muches
                    }
                }
            }
            return newObj;
        };

        let _createMachesByRound = function(data, obj, parentPosition, bool) {
            let attr;
            if (data.MatchYearMonthDays.length > 0) {
                for (attr in  data.MatchYearMonthDays) {
                    obj[attr] = {};
                    Object.defineProperties(obj[attr], {
                        'id': {
                            value: data.RoundNumber + data.MatchYearMonthDays[attr].MatchDate,
                            enumarable: false
                        },
                        'name': {
                            value: data.MatchYearMonthDays[attr].MatchDate,
                            enumarable: false
                        },
                        'checked': {
                            value: bool,
                            enumarable: false,
                            writable: true
                        },
                        'parentPosition': {
                            value: [parentPosition, attr],
                            enumarable: false
                        }
                    });
                    _createMachesByDay(data.MatchYearMonthDays[attr], obj[attr], [parentPosition, attr], bool);
                }
            }
            return obj;
        };

        let _createMachesByDay = function(data, obj, parentPosition, bool) {
            let i, attr, curentParentPosition;
            if (data.Matches.length > 0) {
                for (attr in  data.Matches) {
                    curentParentPosition = [];
                    for (i = 0; i < parentPosition.length; i++) {
                        curentParentPosition.push(parentPosition[i]);
                    }
                    curentParentPosition.push(attr);
                    obj[attr] = {};
                    Object.defineProperties(obj[attr], {
                        'id': {
                            value: data.Matches[attr].MatchId,
                            enumarable: false
                        },
                        'name': {
                            value: [data.Matches[attr].MatchDate, data.Matches[attr].HomeTeamName, data.Matches[attr].AwayTeamName],
                            enumarable: false
                        },
                        'checked': {
                            value: bool,
                            enumarable: false,
                            writable: true
                        },
                        'parentPosition': {
                            value: curentParentPosition,
                            enumarable: false
                        }
                    });
                }
            }
            return obj;
        };

        return {
            createMachesByDay(data, obj, parentPosition, bool) {
                return _createMachesByDay(data, obj, parentPosition, bool);
            },
            createMachesByRound(data, obj, parentPosition, bool) {
                return _createMachesByRound(data, obj, parentPosition, bool);
            },
            createObjectForRoundsDaysMaches(data, bool) {
                return _createObjectForRoundsDaysMaches(data, bool);
            }
        }
    });
    
    createObjectForFixtures.$inject = [];
});
