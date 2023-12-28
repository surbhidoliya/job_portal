package com.job.portal.model;

public class Job {
    private int id;
    private String title;
    private String description;
    private Team team;
    private Location location;

    private JobType jobType;

    public Job(int id, String title, String description, Team team, Location location, JobType jobType) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.team = team;
        this.location = location;
        this.jobType = jobType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public JobType getJobType() {
        return jobType;
    }

    public void setJobType(JobType jobType) {
        this.jobType = jobType;
    }
}
