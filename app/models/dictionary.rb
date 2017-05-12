class Dictionary
  attr_reader :order
  def initialize(text, order = 1)
    @order = order
    @words_for = Hash.new
    @start_words = Array.new

    # Standarize input text
    text.delete! "\n"

    # Process each sentence

    # <sentences> has format sentence+terminator:
    #   ["sent1", "term1", "sent2", "term2", ...]
    chars = /([.!?]+)/
    sentences = text.split(chars)
    sentences.each_slice(2) { |s,t| process_sentence(s.strip,t) }
  end

  # @example Process a sentence
  #   process_sentence("It is cloudy today", "!")

  private def process_sentence(sentence, terminator)
    chars = "([,;:])"

    # Split <sentence> into words
    words = sentence.gsub(/[^#{chars}\w'\s]/, "").gsub(/(#{chars})\s+/, '\1').split(/\s+|#{chars}/)
    words << terminator

    @start_words << words[0, @order]

    until words.size < @order + 1 do
      (@words_for[words[0, @order]] ||= []) << words[@order]
      words.shift
    end
  end

  def get(words)
    (@words_for[words] || []).sample
  end

  def get_start_words
    @start_words.sample
  end
end