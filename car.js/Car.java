public class Car extends Vehicle{
    private int numDoors;
    private boolean isElectric;

    public Car() {
        super(); //memanggil constructor dari class Vehicle
        this.numDoors = 4;
        this.isElectric = false;
    }

    public Car(String merk, int milesPerGallon,int numDoors, boolean isElectric) {
        super(merk, milesPerGallon); //memanggil constructor dari class Vehicle
        this.numDoors = numDoors;
        this.isElectric = isElectric;
    }

    public int getNumDoors() {
        return numDoors;
    }

    public void setNumDoors(int numDoors) {
        this.numDoors = numDoors;
    }

    public boolean isElectric() {
        return isElectric;
    }

    public void setElectric(boolean isElectric) {
        this.isElectric = isElectric;
    }

    public void print() {
        super.print(); //memanggil method print dari class Vehicle
        System.out.println("Number of Doors: " + numDoors);
        System.out.println("Is Electric: " + isElectric);
    }
}
