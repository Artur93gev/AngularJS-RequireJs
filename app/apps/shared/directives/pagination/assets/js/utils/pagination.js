define([],
    () => {
        'use strict';

        let Pagination = function(maxPageCount, clickFunction) {

            let pageArr, changingState, makingArrOfPagesForView, nextPage, previousPage, firstPage, lastPage, choosedPage, checkingForState, arrToReturn;
            let states = ['less', 'begin', 'middle', 'end'];
            let item = {};
            let currentPage;
            if (typeof maxPageCount !== 'number') {
                throw new Error(`maxPagecount must be of number type, not ${typeof(maxPageCount)}`);
            }
            if (typeof clickFunction !== 'function') {
                throw new Error(`clickFunction must be of number type, not ${typeof(clickFunciton)}`);
            }
            let pageCount = maxPageCount;
            let currentState = '';
            let firstClick = {
                value: 1
            };
            let firstFlag = false;
            this.pages = [];
            this.floatToRight = false;

            changingState = () => {
                pageArr = [];
                if (currentState == states[0]) {
                    for (let j = 1; j <= pageCount; j++) {
                        pageArr.push(j);
                    }
                    this.floatToRight = true;
                    return makingArrOfPagesForView(pageArr);
                }
                if (currentState == states[1]) {
                    pageArr = [1, 2, 3, '...', '>', '>>'];
                    this.floatToRight = true;
                    return makingArrOfPagesForView(pageArr);
                }
                if (currentState == states[2]) {
                    pageArr = ['<<', '<', '...'];
                    for (let k = currentPage - 1; k <= currentPage + 1; k++) {
                        pageArr.push(k);
                    }
                    pageArr.push('...', '>', '>>');
                    this.floatToRight = false;
                    return makingArrOfPagesForView(pageArr);
                }
                if (currentState = states[3]) {
                    pageArr = ['<<', '<', '...'];
                    for (let l = pageCount - 2; l <= pageCount; l++) {
                        pageArr.push(l);
                    }
                    this.floatToRight = false;
                    return makingArrOfPagesForView(pageArr);
                }
            };

            makingArrOfPagesForView = (arr) => {
                arrToReturn = [];
                for (let j = 0; j < arr.length; j++) {
                    item.value = arr[j];
                    if (currentPage == arr[j]) {
                        item.model = true;
                    } else {
                        item.model = false;
                    }
                    arrToReturn.push(item);
                    item = {}
                }
                this.pages = arrToReturn;
            };

            nextPage = () => {
                currentPage++;
                return checkingForState();
            };
            previousPage = () => {
                currentPage--;
                return checkingForState();
            };
            firstPage = () => {
                currentPage = 1;
                return checkingForState();
            };
            lastPage = () => {
                currentPage = maxPageCount;
                return checkingForState();
            };
            choosedPage =(val) => {
                currentPage = val;
                return checkingForState();
            };

            checkingForState = () => {
                if (pageCount <= 3) {
                    currentState = states[0];
                    return changingState();
                } else {
                    if (currentPage <= 2) {
                        currentState = states[1];
                        return changingState();
                    } else {
                        if (pageCount - currentPage < 3) {
                            currentState = states[3];
                            return changingState();
                        } else {
                            currentState = states[2];
                            return changingState();
                        }
                    }
                }
            };

            this.choosedPageFromTable = (item) => {

                if (item.value == '>') {
                    nextPage();
                    clickFunction(currentPage);
                }
                if (item.value == '>>') {
                    lastPage();
                    clickFunction(currentPage);
                }
                if (item.value == '<') {
                    previousPage();
                    clickFunction(currentPage);
                }
                if (item.value == '<<') {
                    firstPage();
                    clickFunction(currentPage);
                }
                if (typeof(item.value) == 'number') {
                    if (currentPage != item.value) {
                        choosedPage(item.value);
                        if (firstFlag) {
                            clickFunction(currentPage);
                        }
                        firstFlag = true;
                    }
                }
            };

            this.choosedPageFromTable(firstClick);
        };

        return Pagination;
    }
);
