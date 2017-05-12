require_relative 'dictionary'

class Generator
  def initialize(text, order = 1)
    @dict = Dictionary.new(text, order)
  end

  def get_sentences(n = 1)
    sentences = []

    n.times do
      sentence = @dict.get_start_words

      while next_word = @dict.get(sentence[-@dict.order, @dict.order])
        sentence << next_word
      end

      sentences << (sentence[0...-1].join(" ").gsub(/\s([,;:])/, '\1') << sentence.last)
    end

    sentences
  end
end