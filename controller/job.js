var Job = require("../models/job");

module.exports.createJob = function(newJob, callback) {
    console.log("Create job");
    const job = new Job(newJob);
    console.log(newJob);
    job.save()
        .then((job) => {
            callback(null, job);
        })
        .catch((err) => {
            callback(err);
        });

};

module.exports.updateJob = function(id, newJob, callback) {
    console.log("Update Job");

    Job.findOneAndUpdate({ _id: id }, newJob)
        .then((job) => {
            callback(null, job);
        })
        .catch((err) => {
            callback(err);
        });
};



module.exports.findJobByType = function(jobType, callback) {
    console.log("find Job");

    Job.find({
            'jobType': jobType
        })
        .then((job) => {
            callback(null, job);
        })
        .catch((err) => {
            callback(err);
        });
};