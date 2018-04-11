package com.in28minutes.springboot.jpa.spring.data.rest.example.student;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "profiles", collectionResourceRel = "profiles")
public interface StudentDataRestRepository extends PagingAndSortingRepository<Student, Long>{

}
