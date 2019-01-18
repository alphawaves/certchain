package models;

import java.util.Date;

public class Document {
    private String hash;
    private String url;
    private Entity issuer;
    private Entity receiver;
    private Date dateOfIssue;
    private String moreDetails;

    public Document(String hash, String url, Entity issuer, Entity receiver, Date dateOfIssue, String moreDetails) {
        this.hash = hash;
        this.url = url;
        this.issuer = issuer;
        this.receiver = receiver;
        this.dateOfIssue = dateOfIssue;
        this.moreDetails = moreDetails;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Entity getIssuer() {
        return issuer;
    }

    public void setIssuer(Entity issuer) {
        this.issuer = issuer;
    }

    public Entity getReceiver() {
        return receiver;
    }

    public void setReceiver(Entity receiver) {
        this.receiver = receiver;
    }

    public Date getDateOfIssue() {
        return dateOfIssue;
    }

    public void setDateOfIssue(Date dateOfIssue) {
        this.dateOfIssue = dateOfIssue;
    }

    public String getMoreDetails() {
        return moreDetails;
    }

    public void setMoreDetails(String moreDetails) {
        this.moreDetails = moreDetails;
    }
}
