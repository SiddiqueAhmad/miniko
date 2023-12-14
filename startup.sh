#!/bin/zsh
echo "Hello, may I have your github usernme, please?"
read -r username
echo "Also can you share your github token, please?"
read -rs github_token
if [ -f ~/.m2/settings.xml ]; then
    echo "$(tput setaf 1)will backup existing settings, don't worry$(tput sgr 0)"
    mv ~/.m2/settings.xml ~/.m2/settings-backup.xml
fi
tee ~/.m2/settings.xml > /dev/null <<EOT
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
     <activeProfiles>
        <activeProfile>github</activeProfile>
    </activeProfiles>
    <profiles>
        <profile>
            <id>github</id>
            <repositories>
                <repository>
                    <id>central</id>
                    <url>https://repo1.maven.org/maven2</url>
                    <releases><enabled>true</enabled></releases>
                    <snapshots><enabled>true</enabled></snapshots>
                </repository>
                <repository>
                    <id>github.bazaar.common</id>
                    <name>GitHub OWNER Apache Maven Packages</name>
                    <url>https://maven.pkg.github.com/bazaartechnologies/bazaar-common</url>
                </repository>
                <repository>
                    <id>github.bazaar.notification.sdk</id>
                    <name>GitHub OWNER Apache Maven Packages</name>
                    <url>https://maven.pkg.github.com/bazaartechnologies/bazaar-notification-sdk</url>
                </repository>
                <repository>
                    <id>github.bazaar.logging.sdk</id>
                    <name>GitHub OWNER Apache Maven Packages</name>
                    <url>https://maven.pkg.github.com/bazaartechnologies/bazaar-logging-sdk</url>
                </repository>
            </repositories>
        </profile>
    </profiles>
    <servers>
        <server>
            <id>github.bazaar.common</id>
            <username>${username}</username>
            <password>${github_token}</password>
        </server>
        <server>
            <id>github.bazaar.logging.sdk</id>
            <username>${username}</username>
            <password>${github_token}</password>
        </server>
        <server>
            <id>github.bazaar.notification.sdk</id>
            <username>${username}</username>
            <password>${github_token}</password>
        </server>
    </servers>
</settings>
EOT