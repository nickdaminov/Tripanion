class TripsController < ApplicationController
  def index
    @trip = Trip.all
  end

  def new
  end

  def show
    @trip = Trip.find(params[:id])
  end

  def create
    @trip = Trip.new(trip_params)

    @trip.save
    redirect_to @trip
  end

  private
    def trip_params
      params.require(:trip).permit(:location, :time, :travel, :description)
    end

end
