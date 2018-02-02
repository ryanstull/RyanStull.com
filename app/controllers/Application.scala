package controllers

import play.api.mvc._

class Application extends Controller {

	def index = Action {
		Ok(views.html.index())
	}

	def blog = Action {
		Ok(views.html.sections.blog())
	}
}