package com.in28minutes.springboot.jpa.spring.data.rest.example.model;

import javax.persistence.Entity;
import java.util.Objects;

@Entity
public class Profile {
    private Integer id;
    private String name;
    private String surname;
    private String email;
    private String description;

    public Profile(Integer id, String name, String surname, String email, String description) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Profile profile = (Profile) o;
        return Objects.equals(id, profile.id);
    }


    @Override
    public int hashCode() {

        return Objects.hash(id);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
