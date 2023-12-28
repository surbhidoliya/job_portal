package com.job.portal.service;

import com.job.portal.model.Job;
import com.job.portal.model.request.ListJobsRequest;

import java.util.List;

public interface IJobService {
    /**
     * Function returns Job with job id
     * @param id
     * @return Job
     */
    Job getJob(int id);

    /**
     * Function returns jobs, matching the filters in request
     * @param request
     * @return
     */
    List<Job> listAllJobs(ListJobsRequest request);

}
