package com.job.portal.model.request;

import com.job.portal.model.JobType;

public class ListJobsRequest {
    private Integer locationId;
    private Integer teamId;
    private JobType jobType;

    public ListJobsRequest(Integer locationId, Integer teamId, JobType jobType) {
        this.locationId = locationId;
        this.teamId = teamId;
        this.jobType = jobType;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public Integer getTeamId() {
        return teamId;
    }

    public JobType getJobType() {
        return jobType;
    }
}
