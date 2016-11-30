#Create base of project
FROM flurdy/activator

ENV PROJECT_HOME /usr/src
RUN mkdir -p $PROJECT_HOME/app

#Copy files from localdir and run setup
COPY . $PROJECT_HOME/app
ENV PATH $PROJECT_HOME/app/target/universal/stage/bin:$PATH

WORKDIR $PROJECT_HOME/app
RUN activator clean stage
EXPOSE 9000