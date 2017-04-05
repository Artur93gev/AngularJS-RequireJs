define([], () => {
    'use strict';

    let checkbox = (id, data) => {

        let test, countOfChildes;

        let checkChildes = (obj) => {
            if (Object.keys(obj).length > 0) {
                Object.keys(obj).map((key) => {
                    obj[key].checked = test;
                    checkChildes(obj[key]);
                });
            }
        };

        let checkParent = (obj) => {
            let parentPosition = obj.parentPosition, currentObj = 'data', numberOfChildes = 0, i;
            if (parentPosition) {
                for (i = 0; i < parentPosition.length - 1; i++) {
                    currentObj += '[' + parentPosition[i] + ']';
                }
                currentObj = eval(currentObj);                               // take parent object
                if (test) {
                    Object.keys(currentObj).map((key) => {
                        if (currentObj[key].checked) {
                            numberOfChildes++;
                        }
                    });
                    if (Object.keys(currentObj).length == numberOfChildes) {
                        currentObj.checked = true;
                    }
                } else {
                    currentObj.checked = false;
                }
                checkParent(currentObj);
            }
        };

        let findId = (obj) => {
            countOfChildes = 0;
            if (Object.keys(obj).length > 0) {
                Object.keys(obj).map((key) => {
                    if (obj[key].id != id) {
                        findId(obj[key]);
                    } else {
                        test = obj[key].checked = !obj[key].checked;
                        checkParent(obj[key]);
                        checkChildes(obj[key]);
                        if (typeof obj[key].isVisible != "undefined") {
                            obj[key].isVisible = test;
                        }
                    }
                });
            }
        };

        if (data.id != id) {
            findId(data);
        } else {
            test = data.checked = !data.checked;
            checkChildes(data);
        }
    }

    return checkbox;
});
