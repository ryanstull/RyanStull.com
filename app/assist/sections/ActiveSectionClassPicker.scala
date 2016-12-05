package assist.sections

import javax.inject.{Inject, Singleton}

import play.api.{Application, Configuration}

/**
  * @author ryan
  * @since 12/3/16.
  */
@Singleton
class ActiveSectionClassPicker @Inject() (configuration: Configuration){

	val defaultSection: Option[String] = configuration.getString("defaultSection")

	def getSectionClass(section: String): String = {
		if(defaultSection.isDefined){
			if(section==defaultSection.get){
				"active"
			}else{
				"inactive"
			}
		}else throw UninitializedFieldError("activeSection")
	}

	def getNavClass(section: String): String = {
		if(defaultSection.isDefined){
			if(section==defaultSection.get){
				"active"
			}else{
				""
			}
		}else throw UninitializedFieldError("activeSection")
	}
}

object ViewAccessPoint {

	private[sections] val myDaoCache = Application.instanceCache[ActiveSectionClassPicker]

	object Implicits {
		implicit def classPicker(implicit application: Application): ActiveSectionClassPicker = myDaoCache(application)
	}
}