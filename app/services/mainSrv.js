define([], () => {
    'use strict';
    
    var mainSrv = () => {
       
        return {
            "PermissionsList" : [
                {
                    "Contests"      : [
                        {
                            "Lobby" : [
                                {
                                    "Filters" : [
                                        {
                                            "SearchType"    : true
                                        },
                                        {
                                            "Search"        : true
                                        },
                                        {
                                            "AdvancedSearch" : [
                                                {
                                                    "Leagues"   : true
                                                },
                                                {
                                                    "Other"     : true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Headers" : [
                                        {
                                            "ContestId"             : true
                                        },
                                        {
                                            "ContestName"           : true
                                        },
                                        {
                                            "CreatedBy"             : true
                                        },
                                        {
                                            "ContestType"           : true
                                        },
                                        {
                                            "DurationType"          : true
                                        },
                                        {
                                            "CounterBoolean"        : true
                                        },
                                        {
                                            "PrizeType"             : true
                                        },
                                        {
                                            "DraftType"             : true
                                        },
                                        { 
                                            "EntryFee"              : true
                                        },
                                        {
                                            "EntriesCount"          : true
                                        },
                                        {   
                                            "LeaguesCount"          : true
                                        },
                                        {
                                            "ContestStatus"         : true
                                        },
                                        {
                                            "EntrySize"             : true
                                        },
                                        {
                                            "TimeOrCounterToStart"  : true
                                        },
                                        {
                                            "LineupCount"           : true
                                        },
                                        {
                                            "NetworkCount"          : true
                                        },
                                        {
                                            "PrizefundOrPrize"      : true
                                        },
                                        {
                                            "FixtureCount"          : true
                                        },
                                        {
                                            "Privacy"               : true
                                        }
                                    ]
                                },
                                {
                                    "Lightboxes" : [
                                        {
                                            "CreatedBy"         : true
                                        },
                                        {
                                            "ContestType"       : true
                                        },
                                        {
                                            "DurationType"      : true
                                        },
                                        {
                                            "Counter"           : true
                                        },
                                        {
                                            "PrizeType"         : true
                                        },
                                        {
                                            "DraftType"         : true
                                        },
                                        {
                                            "NetworkBoolean"    : true
                                        },
                                        {
                                            "EntryFee"          : true
                                        },
                                        {
                                            "GuarantedBoolean"  : true
                                        },
                                        {
                                            "GuarantedBy%"      : true
                                        },
                                        {
                                            "SportType"         : true
                                        },
                                        {
                                            "PrizefundOrPrize"  : true
                                        },
                                        {
                                            "FixtureCount"      : true
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            "CreateContest" : [
                                {
                                    "General" : [
                                        {
                                            "SportType"     : true
                                        },
                                        {
                                            "ContestName"   : true
                                        },
                                        {
                                            "Privacy" : [
                                                {
                                                    "Public"    : true
                                                },
                                                {
                                                    "Private"   : true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "LeaguePart",
                                {
                                    "Fixtures"  :   [
                                        {
                                            "SingleRound"   : true
                                        },
                                        {
                                            "CustomRound"   : true
                                        },
                                        {
                                            "FullSeason"    : true
                                        }
                                    ]
                                },
                                {
                                    "Details" : [
                                        {
                                            "DraftType" :   [
                                                {
                                                    "Standart"          : true
                                                },
                                                {
                                                    "Lineur"            : true
                                                },
                                                {
                                                    "Sneak"             : true
                                                },
                                                {
                                                    "AutoPick"          : true
                                                },
                                                {
                                                    "Sonic"             : true
                                                },
                                                {
                                                    "Auction"           : true
                                                },
                                                {
                                                    "RandomSimilar"     : true
                                                },
                                                {
                                                    "RandomNonSimilar"  : true
                                                }
                                            ]
                                        },
                                        {
                                            "ContestType" : [
                                                {
                                                    "H2H"       : true
                                                },
                                                {
                                                    "H2HMatrix" : true
                                                },
                                                {
                                                    "Regular"   : true
                                                }
                                                // ,
                                                // {
                                                //     "Mix"       : true
                                                // }
                                            ]
                                        },
                                        {
                                            "DurationType"  : [
                                                {
                                                    "Daily" : true
                                                },
                                                {
                                                    "Short" : true
                                                },
                                                {
                                                    "Long"  : true
                                                },
                                                {
                                                    "Full"  : true
                                                }
                                            ]
                                        },
                                        {
                                            "CounterBoolean"    : true
                                        },
                                        {
                                            "EntryType" :   [
                                                {
                                                    "Single"    : true
                                                },
                                                {
                                                    "Multiple"  : true
                                                }
                                            ]
                                        },
                                        {
                                            "PrizeType" :   [
                                                {
                                                    "All"               : true
                                                },
                                                {
                                                    "Satellite"         : true
                                                },
                                                {
                                                    "Bonus"             : true
                                                },
                                                {
                                                    "WinnerTakesAll"    : true
                                                },
                                                {
                                                    "Distributed"       : true
                                                },
                                                {
                                                    "50/50"             : true
                                                },
                                                {
                                                    "Triple"            : true
                                                },
                                                {
                                                    "Quadraple"         : true
                                                }   
                                            ]
                                        },
                                        {
                                            "NetworkBoolean"    : true
                                        },
                                        {
                                            "Size"              : true
                                        },
                                        {
                                            "EntryFee"          : true
                                        },
                                        {
                                            "PotentialFund"     : true
                                        },
                                        {
                                            "AutoBoolean"       : true
                                        },
                                        {
                                            "OkButton"          : true
                                        },
                                        {
                                            "GuarantedBoolean"  : true
                                        },
                                        {
                                            "Guaranted%"        : true
                                        },
                                        {
                                            "GuarantedAuto"     : true
                                        }
                                    ]
                                },
                                {
                                    "Network" : [
                                        {
                                            "PartnerName"           : true
                                        },
                                        {
                                            "PartnerNameScroller"   : true
                                        },
                                        {
                                            "PartnerId"             : true
                                        },
                                        {
                                            "PartnerIdScroller"     : true
                                        }
                                    ]
                                }
                            ]
                        } 
                    ],
                },
                {
                    "Bank"          : [
                        {
                            'Search'    : true
                        },
                        {
                            'Button'    : true
                        },
                        {
                            'Network' : [
                                {
                                    'AddNewNetwork' : true
                                }
                            ]
                        },
                        {
                            'Headers'  :    [
                                {
                                    'Contest Id'    : true
                                },
                                {
                                    'Contest Name'  : true
                                },
                                {
                                    'Contest Type'  : true
                                },
                                {
                                    'Prize Type'    : true
                                },
                                {
                                    'Entry Fee'     : true
                                },
                                {
                                    'All Players'   : true
                                },
                                {
                                    'Entries Size'  : true
                                },
                                {
                                    'Entry type'    : true
                                },
                                {  
                                    'League'        : true
                                },
                                {
                                    'Draft type'    : true
                                },
                                {
                                    'Status'        : true
                                },
                                {
                                    'Time'          : true
                                },
                                {
                                    'Network'       : true
                                },
                                {
                                    'Fixture'       : true
                                },
                                {
                                    'Prizefund'     : true
                                },
                                {
                                    'Own Players'   : true
                                },
                                {
                                    'Deposit'       : true
                                },
                                {
                                    'All deposits'  : true
                                }
                            ]
                        }
                    ]
                },
                {
                    "Users"         : true
                },
                { 
                    "Leagues"       : true
                },
                {
                    "Athletes"      : true
                },
                {
                    "Bonus"         : true
                },
                {
                    "Missions"      : true
                },
                {
                    "Loyalty"       : true
                },
                {
                    "Challanges" : true
                },
                {
                    "Cloud"         : true
                },
                {
                    "Accounts"      : true
                },
                {
                    "Logs"          : true
                }
                ]
        }
    }

    mainSrv.$inject = [];

    return mainSrv;
});
