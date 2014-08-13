class LocationsController < ApplicationController
  def index
  	@locations = Location.all
  end

  def new

  	@locations = Location.new()

  end

  def create

  	@location = Location.create(location_params)
  	redirect_to root_path

  end

  private
  def location_params
	params.require(:location).permit(:title, :address)
  end

end
