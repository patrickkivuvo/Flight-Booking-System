package com.computerscience.puea.flightbookingsystem.flight.controller.repository;

import com.computerscience.puea.flightbookingsystem.flight.controller.model.Flight;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;

import org.bson.Document;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchRepositoryImpl implements SearchRepository{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter  converter;
    @Override
    public List<Flight> findByText(String text) {
        final List<Flight> flights = new  ArrayList<>();


        MongoDatabase database = client.getDatabase("puea");
        MongoCollection<Document> collection = database.getCollection("flight");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                new Document("text",
                        new Document("query", text)
                                .append("path", Arrays.asList("model", "name", "source", "destination", "distance", "days", "luggage", "departure", "arrival", "duration", "seats"))))));
        result.forEach(doc -> flights.add(converter.read(Flight.class, doc)));


        return flights;
    }
}
