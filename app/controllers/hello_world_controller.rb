require_relative '../../app/models/spreadsheet_calculator'

class HelloWorldController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @hello_world_props = { name: "3 2\nB2\4 3 *\nC2\nA1 B1 / 2 +\n13\nB1 A2 / 2 *\n" }
  end

  def calculate
    calculator = SpreadSheetCalculator.new(params[:input])
    @output = calculator.perform
    Submission.create(output: @output)
  end
end
