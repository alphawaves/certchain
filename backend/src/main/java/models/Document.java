package models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data @AllArgsConstructor
public class Document {
    private String hash;
    private String url;
    private Entity issuer;
    private Entity receiver;
    private Date dateOfIssue;
    private String moreDetails;
}
