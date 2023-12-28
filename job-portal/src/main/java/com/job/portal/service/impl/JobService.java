package com.job.portal.service.impl;

import com.job.portal.model.Job;
import com.job.portal.model.JobType;
import com.job.portal.model.Location;
import com.job.portal.model.Team;
import com.job.portal.model.request.ListJobsRequest;
import com.job.portal.service.IJobService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobService implements IJobService {
    @Override
    public Job getJob(int id) {
        List<Job> jobs = getStaticJobs();
        for (Job job : jobs) {
            if (job.getId() == id) {
                return job;
            }
        }

        return null;
    }

    @Override
    public List<Job> listAllJobs(ListJobsRequest request) {
        List<Job> jobs = getStaticJobs();
        List<Job> results = new ArrayList<>();
        // filter jobs based on condition
        // as currently we are having static data, therefore implementing filtering here
        // once moved to database calls, filtering will be done in queries itself
        boolean hasAnyFilter = request.getLocationId() != null || request.getTeamId() != null || request.getJobType() != null;
        for (Job job : jobs) {
            boolean isFiltered = false;
            if (request.getLocationId() != null && request.getLocationId() != job.getLocation().getId()) {
                isFiltered = true;
            }

            if (request.getTeamId() != null && request.getTeamId() != job.getTeam().getId()) {
                isFiltered = true;
            }

            if (request.getJobType() != null && request.getJobType() != job.getJobType()) {
                isFiltered = true;
            }

            if (!isFiltered || !hasAnyFilter) {
                results.add(job);
            }
        }
        return results;
    }

    /**
     * This function gives static data,
     * TODO: should be replaced with database calls
     * @return
     */
    private List<Job> getStaticJobs() {
        List<Job> jobs = new ArrayList<>();
        jobs.add(new Job(1, "Software Engineer", "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate\n" +
                "will have strong front-end and back-end development skills, as well as a passion for creating\n" +
                "innovative web applications.", new Team(1, "Infrastructure"), new Location(1, "Delhi"), JobType.ONSITE));
        jobs.add(new Job(2, "Account Manager", "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate\n" +
                "will have strong front-end and back-end development skills, as well as a passion for creating\n" +
                "innovative web applications.", new Team(2, "EDC Retail"), new Location(2, "Indore"), JobType.HYBRID));
        jobs.add(new Job(3, "Senior Software Engineer", "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate\n" +
                "will have strong front-end and back-end development skills, as well as a passion for creating\n" +
                "innovative web applications.", new Team(3, "Merchant"), new Location(1, "Delhi"), JobType.ONSITE));
        jobs.add(new Job(4, "Junior Software Engineer", "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate\n" +
                "will have strong front-end and back-end development skills, as well as a passion for creating\n" +
                "innovative web applications.", new Team(4, "Accounting"), new Location(1, "Delhi"), JobType.REMOTE));
        jobs.add(new Job(5, "Software Engineer", "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate\n" +
                "will have strong front-end and back-end development skills, as well as a passion for creating\n" +
                "innovative web applications.", new Team(1, "Infrastructure"), new Location(1, "Delhi"), JobType.ONSITE));
        jobs.add(new Job(6, "Software Engineer", "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate\n" +
                "will have strong front-end and back-end development skills, as well as a passion for creating\n" +
                "innovative web applications.", new Team(5, "Retail"), new Location(1, "Delhi"), JobType.ONSITE));
        jobs.add(new Job(7, "Product Manager", "We are seeking a highly motivated and experienced Product Manager to join our growing team. The ideal candidate will have a passion for creating innovative products, a deep understanding of market trends, and a proven track record of successfully managing the end-to-end product development lifecycle. As a Product Manager, you will play a pivotal role in shaping the future of our products and driving business growth.", new Team(6, "Sales"), new Location(1, "Delhi"), JobType.ONSITE));
        jobs.add(new Job(8, "Sales Manager", "As a Sales Manager, you will be responsible for developing and implementing effective sales strategies, managing a team of sales professionals, and achieving revenue targets. You will play a crucial role in identifying new business opportunities, building strong customer relationships, and ensuring the overall success of our sales efforts." +
                "innovative web applications.", new Team(6, "Sales"), new Location(3, "Mumbai"), JobType.ONSITE));
        jobs.add(new Job(9, "Senior Product Manager", "We are seeking a highly motivated and experienced Product Manager to join our growing team. The ideal candidate will have a passion for creating innovative products, a deep understanding of market trends, and a proven track record of successfully managing the end-to-end product development lifecycle. As a Product Manager, you will play a pivotal role in shaping the future of our products and driving business growth.", new Team(6, "Sales"), new Location(1, "Delhi"), JobType.ONSITE));
        return jobs;
    }
}
