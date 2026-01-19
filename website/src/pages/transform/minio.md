
# Using MinIo or S3 Storage

Carrot Transform can stream data to MinIo storage.
Carrot Transform can also read data from MinIo as a source, but it loads a whole file at a time.

The data is written in a `.tsv` format, without file extensions, and read from a `.csv` format, also without file extensions.

This is implemented through Amazon's S3 [boto3 api](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html), so it will behave similarly to that.

To read or write, a "connection string" resembling what one would use for SQLAlchemy is required, with the layout as follows...

`minio:<username>:<password>@http://<host>:<port>/<bucket>/<folder>`

... the folder is optional.
The test files include several examples, including testing the connection strings themselves.

https://github.com/Health-Informatics-UoN/carrot-transform/blob/main/tests/test_connection_minio.py#L22-L32
