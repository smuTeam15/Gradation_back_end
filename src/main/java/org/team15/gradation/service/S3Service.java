package org.team15.gradation.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.NoArgsConstructor;
import org.joda.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
@Service
public class S3Service {
    public static final String CLOUD_FRONT_DOMAIN_NAME = "https://d359xsrpr7zpmy.cloudfront.net/";

    private AmazonS3 s3Client;

    @Value("${cloud.aws.credentials.accessKey}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secretKey}")
    private String secretKey;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${cloud.aws.region.static}")
    private String region;

    @PostConstruct
    public void setS3Client() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);

        s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(this.region)
                .build();
    }

    public String upload(String prefix, String id, MultipartFile file) throws IOException {
        String now = java.time.LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        String fileName = prefix + "_" + id + "_" + now;

        if (s3Client.doesObjectExist(bucket, fileName))
            s3Client.deleteObject(bucket, fileName);

        s3Client.putObject(new PutObjectRequest(bucket, fileName, file.getInputStream(), null)
                .withCannedAcl(CannedAccessControlList.PublicRead));
        
        return fileName;
    }

    public void delete(String prefix, String id) {
        String fileName = prefix + "_" + id;

        if (s3Client.doesObjectExist(bucket, fileName))
            s3Client.deleteObject(bucket, fileName);
    }
}
