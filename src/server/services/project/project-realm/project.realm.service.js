/**
 * Created by umut.taherzadeh on 2017-02-05.
 */

// rest services going to be implement under this section
module.exports = {
    "getProjects" : function (params){

        var projects = [
            {name : "name", manager : "manager", startDate : "startDate", endDate : "endDate", iteration : "iteration", iterationStartDate : "iterationStartDate", iterationEndDate : "iterationEndDate"},
            {name : "name", manager : "manager", startDate : "startDate", endDate : "endDate", iteration : "iteration", iterationStartDate : "iterationStartDate", iterationEndDate : "iterationEndDate"},
            {name : "name", manager : "manager", startDate : "startDate", endDate : "endDate", iteration : "iteration", iterationStartDate : "iterationStartDate", iterationEndDate : "iterationEndDate"},
            {name : "name", manager : "manager", startDate : "startDate", endDate : "endDate", iteration : "iteration", iterationStartDate : "iterationStartDate", iterationEndDate : "iterationEndDate"},
            {name : "name", manager : "manager", startDate : "startDate", endDate : "endDate", iteration : "iteration", iterationStartDate : "iterationStartDate", iterationEndDate : "iterationEndDate"},
            {name : "name", manager : "manager", startDate : "startDate", endDate : "endDate", iteration : "iteration", iterationStartDate : "iterationStartDate", iterationEndDate : "iterationEndDate"}
        ];
        return projects;
    }
};