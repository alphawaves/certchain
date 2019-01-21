package models;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
public @Data class Entity {
    private String name;
    private String website;
    private String address;
    private String blockchainAddress;
}
