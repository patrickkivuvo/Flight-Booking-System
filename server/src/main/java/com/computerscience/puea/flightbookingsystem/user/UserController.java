package com.computerscience.puea.flightbookingsystem.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/user-admin")
@RestController
public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository= userRepository;
    }
    @Autowired
    private UserService service;

    @GetMapping
    public List<User> getUsers(){
        return service.findAllUsers();
    }

    @PostMapping
    public void createUser(@RequestBody User user){
        User saveUser = service.addUser(user);
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId){
        return service.getUserByUserId(userId);
    }
    @GetMapping("/username/{username}")
    public List<User> findUserByUsername(@PathVariable String username) {
        return service.getUserByUsername(username);
    }
    @GetMapping("/password/{password}")
    public List<User> findUserByPassword(@PathVariable String password){
        return service.getUserByPassword(password);
    }

    @PutMapping
    public User modifyUser(@RequestBody User user){
        return service.updateUser(user);
    }

    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable String userId){
        return service.deleteUser(userId);
    }



}
