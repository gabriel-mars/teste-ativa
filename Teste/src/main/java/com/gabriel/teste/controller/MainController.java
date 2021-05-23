/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gabriel.teste.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gabrielmartins
 */
@CrossOrigin
@RestController
public class MainController {
    
    @RequestMapping("/")
    public String homeAPI() {
        return "Welcome to API!";
    }
}
