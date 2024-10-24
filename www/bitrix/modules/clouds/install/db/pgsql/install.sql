
CREATE TABLE b_clouds_file_bucket (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  ACTIVE char(1) DEFAULT 'Y',
  SORT int DEFAULT 500,
  READ_ONLY char(1) DEFAULT 'N',
  SERVICE_ID varchar(50),
  BUCKET varchar(63),
  LOCATION varchar(50),
  CNAME varchar(100),
  FILE_COUNT int DEFAULT 0,
  FILE_SIZE double precision DEFAULT 0,
  LAST_FILE_ID int,
  PREFIX varchar(100),
  SETTINGS text,
  FILE_RULES text,
  FAILOVER_ACTIVE char(1) DEFAULT 'N',
  FAILOVER_BUCKET_ID int,
  FAILOVER_COPY char(1) DEFAULT 'N',
  FAILOVER_DELETE char(1) DEFAULT 'N',
  FAILOVER_DELETE_DELAY int,
  PRIMARY KEY (ID)
);

CREATE TABLE b_clouds_file_upload (
  ID varchar(32) NOT NULL,
  TIMESTAMP_X timestamp NOT NULL,
  FILE_PATH varchar(500) NOT NULL,
  FILE_SIZE int8,
  TMP_FILE varchar(500),
  BUCKET_ID int NOT NULL,
  PART_SIZE int NOT NULL,
  PART_NO int NOT NULL,
  PART_FAIL_COUNTER int NOT NULL,
  NEXT_STEP text,
  PRIMARY KEY (ID)
);

CREATE TABLE b_clouds_file_resize (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL,
  ERROR_CODE int NOT NULL DEFAULT 0,
  FILE_ID int,
  PARAMS text,
  FROM_PATH varchar(500),
  TO_PATH varchar(500),
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_clouds_file_resize_timestamp_x ON b_clouds_file_resize (timestamp_x);
CREATE INDEX ix_b_clouds_file_resize_to_path ON b_clouds_file_resize (to_path);
CREATE INDEX ix_b_clouds_file_resize_file_id ON b_clouds_file_resize (file_id);

CREATE TABLE b_clouds_copy_queue (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL,
  OP char(1) NOT NULL,
  SOURCE_BUCKET_ID int NOT NULL,
  SOURCE_FILE_PATH varchar(500) NOT NULL,
  TARGET_BUCKET_ID int NOT NULL,
  TARGET_FILE_PATH varchar(500) NOT NULL,
  FILE_SIZE int NOT NULL DEFAULT -1,
  FILE_POS int NOT NULL DEFAULT 0,
  FAIL_COUNTER int NOT NULL DEFAULT 0,
  STATUS char(1) NOT NULL DEFAULT 'Y',
  ERROR_MESSAGE varchar(500),
  PRIMARY KEY (ID)
);

CREATE TABLE b_clouds_delete_queue (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL,
  BUCKET_ID int NOT NULL,
  FILE_PATH varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_clouds_delete_queue_bucket_id_file_path ON b_clouds_delete_queue (bucket_id, file_path);

CREATE TABLE b_clouds_file_save (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  TIMESTAMP_X timestamp NOT NULL,
  BUCKET_ID int NOT NULL,
  SUBDIR varchar(255),
  FILE_NAME varchar(255) NOT NULL,
  EXTERNAL_ID varchar(50),
  FILE_SIZE int8,
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_clouds_file_save_external_id ON b_clouds_file_save (external_id);

CREATE TABLE b_clouds_file_hash (
  ID int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  BUCKET_ID int NOT NULL,
  FILE_PATH varchar(760) NOT NULL,
  FILE_SIZE int8,
  FILE_MTIME timestamp,
  FILE_HASH varchar(50),
  PRIMARY KEY (ID)
);
CREATE INDEX ix_b_clouds_file_hash_bucket_id_file_path ON b_clouds_file_hash (bucket_id, file_path);
