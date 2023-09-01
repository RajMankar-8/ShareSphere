class ReferralsController < ApplicationController
  before_action :set_referral, only: %i[show update destroy]

  def index
    @referrals = Referral.all
    render json: @referrals
  end

  def show
    render json: @referral
  end

  def create
    @referral = Referral.new(referral_params)

    if @referral.save
      ReferralEmailMailer.welcome_email(@referral).deliver_now
      render json: @referral, status: :created, location: @referral
    else
      render json: @referral.errors, status: :unprocessable_entity
    end
  end

  def update
    if @referral.update(referral_params)
      render json: @referral
    else
      render json: @referral.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @referral.destroy
  end

  private

  def set_referral
    @referral = Referral.find(params[:id])
  end

  def referral_params
    params.require(:referral).permit(:email, :subject, :description)
  end
end
