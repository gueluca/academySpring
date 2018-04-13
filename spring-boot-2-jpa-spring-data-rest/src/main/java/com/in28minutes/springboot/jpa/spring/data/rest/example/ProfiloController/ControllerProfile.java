package com.in28minutes.springboot.jpa.spring.data.rest.example.ProfiloController;


import org.springframework.stereotype.Controller;
import java.util.ArrayList;
import com.in28minutes.springboot.jpa.spring.data.rest.example.model.Profile;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

@RestController
public class ControllerProfile {

    private static List<Profile> profili = new ArrayList<Profile>() {{
      add(new Profile(1,"Giuseppe","Fornaro", "g.furnaro@gmail.com", "backend developer"));
      add(new Profile(2, "Luca", "Guerrini", "gueluca@gmail.com","backend developer" ));
    }};

    @RequestMapping(path = "profiles")
    public List<Profile> getProfiles() {
        return profili;
    }

    @RequestMapping(path = "profiles/id/{id}", method = RequestMethod.GET)
    public  Profile getOneProfile(@PathVariable("id") Integer id) {
        Iterator<Profile> it = profili.iterator();
        while(it.hasNext()){
            Profile p = it.next();
            if(p.getId() == id)
                return p;
        }
        return null;
    }

    @RequestMapping(path = "profile", method = RequestMethod.POST)
    public  Profile createProfile(@RequestParam("nome") String name,
                                  @RequestParam("cognome") String surname,
                                  @RequestParam("email") String email,
                                  @RequestParam("descrizione") String description
                                  ) {

        Profile utente = new Profile(profili.get(profili.size()-1).getId()+1,name,surname,email,description);

        profili.add(utente);
        return utente;
    }


}
