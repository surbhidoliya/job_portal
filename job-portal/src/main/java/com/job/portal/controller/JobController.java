package com.job.portal.controller;

import com.job.portal.model.Job;
import com.job.portal.model.JobType;
import com.job.portal.model.request.ListJobsRequest;
import com.job.portal.service.IJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private IJobService jobService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/job/{id}")
    public Job getJobById(@PathVariable Integer id) {
        return jobService.getJob(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/job")
    public List<Job> getJobs(@RequestParam(required = false) Integer locationId, @RequestParam(required = false) Integer teamId,
                             @RequestParam(required = false) JobType jobType) {
        ListJobsRequest request = new ListJobsRequest(locationId, teamId, jobType);
        return jobService.listAllJobs(request);
    }
}
