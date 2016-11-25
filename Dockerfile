FROM openjdk:8
ENV PROJECT_HOME /usr/src
RUN mkdir -p $PROJECT_HOME/activator $PROJECT_HOME/app2
WORKDIR $PROJECT_HOME/activator
RUN wget http://downloads.typesafe.com/typesafe-activator/1.3.10/typesafe-activator-1.3.10.zip && \
    unzip typesafe-activator-1.3.10.zip
ENV PATH $PROJECT_HOME/activator/activator-dist-1.3.10/bin:$PATH
ENV PATH $PROJECT_WORKPLACE/build/target/universal/stage/bin:$PATH
COPY . $PROJECT_HOME/app
WORKDIR $PROJECT_HOME/app
EXPOSE 9000