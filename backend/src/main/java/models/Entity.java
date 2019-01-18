package models;

public class Entity {
    private String name;
    private String website;
    private String address;
    private String blockchainAddress;

    public Entity(String name, String website, String address, String blockchainAddress) {
        this.name = name;
        this.website = website;
        this.address = address;
        this.blockchainAddress = blockchainAddress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBlockchainAddress() {
        return blockchainAddress;
    }

    public void setBlockchainAddress(String blockchainAddress) {
        this.blockchainAddress = blockchainAddress;
    }
}
