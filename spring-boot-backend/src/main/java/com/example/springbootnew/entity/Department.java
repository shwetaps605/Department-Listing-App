package com.example.springbootnew.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity //specifies that Department will be a table in the database
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Department {
    @Id // sets the departmentId as the primary key
    @GeneratedValue(strategy = GenerationType.AUTO ) //Specifies how the PK will be created
    private Long departmentId;

    @NotBlank(message="Please add department name")
    @Length(max=20,min=1)
    private String departmentName;
    private String departmentAddress;
    private String departmentCode;


}
