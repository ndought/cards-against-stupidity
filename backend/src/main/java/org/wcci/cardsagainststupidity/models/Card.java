package org.wcci.cardsagainststupidity.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Card {
    
    @Id
    @GeneratedValue
    private Long id;
    private String term;
    private String definition;
    @ManyToOne
    private Deck deck;
    
    public Card() {
    }
    
    public Card(String term, String definition) {
        this.term = term;
        this.definition = definition;
    }
    
    public Card(String term, String definition, Deck deck) {
        this.term = term;
        this.definition = definition;
        this.deck = deck;
        deck.addCard(this);
    }
    
    public String getTerm() {
        return term;
    }
    
    public String getDefinition() {
        return definition;
    }
    
    public Deck getDeck() {
        return deck;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return Objects.equals(term, card.term) &&
                Objects.equals(definition, card.definition) &&
                Objects.equals(deck, card.deck);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(term, definition, deck);
    }
}
