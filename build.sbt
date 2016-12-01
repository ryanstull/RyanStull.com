name := "personal_site"

version := "1.1"

lazy val `personal_site` = (project in file(".")).enablePlugins(PlayScala,sbtdocker.DockerPlugin)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( jdbc , cache , ws , specs2 % Test )

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

dockerfile in docker := {
	val appDir: File = stage.value
	val PROJECT_HOME = "/usr/src"
	new Dockerfile {
		from("openjdk:8")
		run("mkdir","-p",PROJECT_HOME)
		copy(appDir,PROJECT_HOME)
		entryPoint(s"$PROJECT_HOME/bin/${executableScriptName.value}")
		expose(9000)
	}
}

imageNames in docker := Seq(
	// Sets the latest tag
	ImageName(s"${name.value}:latest"),
	// Sets a name with a tag that contains the project version
	ImageName(
		namespace = None,
		repository = name.value,
		tag = Some("v" + version.value)
	)
)