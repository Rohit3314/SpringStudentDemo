package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student 
{
    @Id
	private int sid;
	private String sname;
	private double sper;
	
	public Student() {
		super();
	}

	public Student(int sid, String sname, double sper) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.sper = sper;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public double getSper() {
		return sper;
	}

	public void setSper(double sper) {
		this.sper = sper;
	}
	
	
}
