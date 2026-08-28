public class Vehicle {
    //property class
    private String merk;
    private int milesPerGallon;
    
    //Constructor Default
    public Vehicle() {
        merk = "Toyota";
        milesPerGallon = 20;
    }

    //Constructor Parameter
    public Vehicle(String merk, int milesPerGallon) {
        this.merk = merk;
        this.milesPerGallon = milesPerGallon;
    }
    
    //getter -->mengambil nilai
    public String getMerk() {
        return merk;
    }

    public int getMilesPerGallon() {
        return milesPerGallon;
    }

    //setter -->mengubah nilai
    public void setMerk(String merk) {
        this.merk = merk;
    }

    public void setMilesPerGallon(int milesPerGallon) {
        this.milesPerGallon = milesPerGallon;
    }

    //method
    public void print() {
        System.out.println("Merk: " + merk);
        System.out.println("Miles Per Gallon: " + milesPerGallon);
    }

    public int compare() {
        if(milesPerGallon > 50) {
            return 1;
        }
        return 0;
    }
}
