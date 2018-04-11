package com.in28minutes.springboot.jpa.spring.data.rest.example.ProfiloController;


import org.springframework.stereotype.Controller;
import java.util.ArrayList;
import com.in28minutes.springboot.jpa.spring.data.rest.example.student.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ControllerProfile {

    private static List<Student> profili = new ArrayList<Student>() {{
      add(new Student());
      add(new Student());
    }};

    @RequestMapping(path = "profiles")
    public List<Student> getProfiles() {
        return profili;
    }


}
