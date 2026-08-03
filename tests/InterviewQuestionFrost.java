/** This file contains the implementation of the Character, Warrior, and Game classes.
 You may use this file to implement the classes as described in the questions above.
 If you have any questions or need further assistance, feel free to ask.

 implemented via InterviewQuestion@Frost.java
/////////////////////////////////////////////////////////////////////////////////////// */
 
/** Create an abstract Character Class:
   - create a private variable NAME 
   - create a protected variable MAX_HEALTH, default it to 10.
   - create a protected variable HEALTH, default it to MAX_HEALTH.
   - create a constructor that takes one parameter and assign it to NAME.
   - create getters/setters for NAME.
   - create a public abstract method named examine. */

abstract class Character {
    private String name;
    protected int maxHealth = 10;
    protected int health;

    public Character(String name) {
        this.name = name;
        this.health = maxHealth;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public abstract void examine();

}

/**Create a Warrior class that inherits Character Class:
   - create a private variable STRENGTH_NUM 
   - create 2 constructors:
       - Default constructor that sets the name to "Vannaka"
       - A constructor that takes in 3 parameters:
           - NAME and assign it to NAME
           - HEALTH  and assign it to HEALTH.
           - STRENGTH and assign it to STRENGTH.

   - create 2 methods:
       - create a public void heal method that takes in an int parameter named hpHealed
           - add hpHealed to HEALTH
       - create a public void takeDamage method that takes in an int parameter named dmgTaken
           - subtract dmgTaken from HEALTH
 
   - Create examine method to print out "My name is [NAME]":
       - NAME should be the character's NAME variable' */

class Warrior extends Character {
    private int strengthNum;

    public Warrior() {
        super("Vannaka");
        this.strengthNum = 50;
    }

    public Warrior(String name, int health, int strength) {
        super(name);
        this.health = health;
        this.strengthNum = strength;
    }

    public void heal(int hpHealed) {
        this.health += hpHealed;
    }

    public void takeDamage(int dmgTaken) {
        this.health -= dmgTaken;
    }

    public void examine() {
        System.out.println("I bank with... " + super.getName());
    }
}   

/*Create a Game Class:
   - create a main method:
       - Instantiate a Warrior class with a name, health set at 100 and strength set at 50
       - Have the warrior take 99 damage
       - Have the warrior heal 20 health
       - Have the warrior call examine */
class InterviewQuestionFrost {
    public static void main(String[] args) {
        Warrior warrior = new Warrior("Frost", 100, 50);
        warrior.takeDamage(99);
        warrior.heal(20);
        warrior.examine();
    }
}