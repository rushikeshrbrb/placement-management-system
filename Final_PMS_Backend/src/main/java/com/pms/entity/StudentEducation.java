package com.pms.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "StudentEducation")
public class StudentEducation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StudentEducation_id")
    private int studentEducationId;

    @Column(name = "Student_id")
    private int studentId;

    @Column(name = "Class10_Passing_Year")
    private int class10PassingYear;

    @Column(name = "Class10_Percentage")
    private double class10Percentage;

    @Column(name = "Class12_Passing_Year")
    private int class12PassingYear;

    @Column(name = "Class12_Percentage")
    private double class12Percentage;

    @Column(name = "Graduation_Completion_Year")
    private int graduationCompletionYear;

    @Column(name = "Graduation_Percentage")
    private double graduationPercentage;
    
    

	public int getStudentEducationId() {
		return studentEducationId;
	}

	public void setStudentEducationId(int studentEducationId) {
		this.studentEducationId = studentEducationId;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public int getClass10PassingYear() {
		return class10PassingYear;
	}

	public void setClass10PassingYear(int class10PassingYear) {
		this.class10PassingYear = class10PassingYear;
	}

	public double getClass10Percentage() {
		return class10Percentage;
	}

	public void setClass10Percentage(double class10Percentage) {
		this.class10Percentage = class10Percentage;
	}

	public int getClass12PassingYear() {
		return class12PassingYear;
	}

	public void setClass12PassingYear(int class12PassingYear) {
		this.class12PassingYear = class12PassingYear;
	}

	public double getClass12Percentage() {
		return class12Percentage;
	}

	public void setClass12Percentage(double class12Percentage) {
		this.class12Percentage = class12Percentage;
	}

	public int getGraduationCompletionYear() {
		return graduationCompletionYear;
	}

	public void setGraduationCompletionYear(int graduationCompletionYear) {
		this.graduationCompletionYear = graduationCompletionYear;
	}

	public double getGraduationPercentage() {
		return graduationPercentage;
	}

	public void setGraduationPercentage(double graduationPercentage) {
		this.graduationPercentage = graduationPercentage;
	}

    

	
	

	
	
	

	
	
	

}
