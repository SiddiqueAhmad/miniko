FROM apache/hive:3.1.3
USER root
RUN apt-get update \
 && apt-get install --assume-yes curl \
 && apt-get clean

ENV HADOOP_VERSION=3.3.3

COPY scripts/hive/hive-site.xml $HIVE_HOME/conf

RUN curl -L https://archive.apache.org/dist/hadoop/common/hadoop-${HADOOP_VERSION}/hadoop-${HADOOP_VERSION}.tar.gz | tar zxf - && \
    curl -L https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.19.tar.gz | tar zxf - && \
    curl -L https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/0.20.0/jmx_prometheus_javaagent-0.20.0.jar && \
    cp mysql-connector-java-8.0.19/mysql-connector-java-8.0.19.jar ${HIVE_HOME}/lib/ && \
    rm -rf  mysql-connector-java-8.0.19 && \
    mv hadoop-3.3.3 /opt \
    mkdir /opt/java_metrics \
    mv jmx_prometheus_javaagent-0.20.0.jar /opt/java_metrics/jmx_prometheus_javaagent-0.20.0.jar

USER hive
ENV HADOOP_VERSION=3.3.3
ENV HADOOP_HOME=/opt/hadoop-3.3.3
ENV HADOOP_CLASSPATH=/opt/hadoop-3.3.3/share/hadoop/tools/lib/aws-java-sdk-bundle-1.11.1026.jar:/opt/hadoop-3.3.3/share/hadoop/tools/lib/hadoop-aws-3.3.3.jar
