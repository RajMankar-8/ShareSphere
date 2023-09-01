class ReferralEmailMailer < ApplicationMailer

  def welcome_email(referral)
    @referral_email = referral.email
    @referral_subject = referral.subject
    @referral_description = referral.description

    mail(
      to: @referral_email.to_s,
      subject: "Join Us: Unlock a World of Possibilities at WebinaHub"
    )
  end
end
