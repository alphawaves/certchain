package models;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class TransferContract {
    String docHash;
    String issuerAddress;
    String recipientAddress;
}
