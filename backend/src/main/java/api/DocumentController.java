package api;

import models.Document;
import models.Entity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class DocumentController {

    Entity issuer = new Entity("Panjab University","https://puchd.ac.in","Sector 14, Chandigarh","0xadaksdjkas");
    Entity receiver = new Entity("Student","","BH6, Panjab University","0xasdnasd");
    Document document = new Document("0xajsndjand","https://myserver.com/asdkasnd",issuer,receiver,new Date(),"no more details");

    @GetMapping("/")
    public Document getDocument(){
        return document;
    }

    @GetMapping("/search")
    public Document getDocument(@RequestParam ("id") String docHash){
        document.setHash(docHash);
        return document;
    }

    @GetMapping("/received")
    public List<Document> getDocumentsReceived(@RequestParam("address") String entityAddress){
        return Arrays.asList(document,document,document,document);
    }

    @GetMapping("/published")
    public List<Document> getDocumentsPublished(@RequestParam("address") String entityAddress){
        return Arrays.asList(document,document,document,document);
    }

    @GetMapping("/unpublished")
    public List<Document> getDocumentsUnpublished(@RequestParam("address") String entityAddress){
        return Arrays.asList(document,document,document,document);
    }

    @PostMapping("/upload")
    public String uploadDocument(@RequestBody String document){
        return "Document "+document.toString()+" Uploaded";
    }

    @PostMapping("/issue")
    public String issueDocument(@RequestBody String document){
        //TODO: Replace String with TransferContract here
        return "Document "+document.toString()+" Issued";
    }
}
