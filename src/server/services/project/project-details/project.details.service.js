/**
 * Created by umut.taherzadeh on 2017-02-05.
 */

// rest services going to be implement under this section
module.exports = {
    "getProject": function (oid) {
        return {
            name: "name",
            manager: "manager",
            startDate: "startDate",
            endDate: "endDate",
            iteration: "iteration",
            iterationStartDate: "iterationStartDate",
            iterationEndDate: "iterationEndDate"
        };
    },

    "updateProject": function (project) {
        var projectDB = this.getProject(project.oid)
        //TODO merge 2 objects
        projectDB = project;
        this.saveProject(projectDB);
        return projectDB.oid;
    },

    "saveProject": function (project) {
        // TODO save
    },

    "deleteProject" : function (oid) {
        // TODO delete
    }

};