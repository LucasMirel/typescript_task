public class VehicleTest {
    public static void main(String[] args) {
        Vehicle car = new Vehicle();
        car.print();

        Vehicle truck = new Vehicle("Mercedes", 15);
        truck.print();

        Vehicle bus = new Vehicle();
        bus.setMerk("Hino");
        bus.setMilesPerGallon(100);
        bus.print();
        bus.compare();

        Car sedan = new Car();
        sedan.print();
        
        Car suv = new Car("Honda", 50, 5, true);
        suv.print();

    //     int a = truck.getMilesPerGallon();
    //     int b = bus.getMilesPerGallon();
    //     int hasil = compare1(a, b);
    //     System.out.println(hasil);
    //     if(hasil == 1) {
    //         System.out.println(truck.getMerk() +" Lebih besar");
    //     } else if(hasil==2) {
    //         System.out.println(bus.getMerk() +" Lebih besar");
    //     } else {
    //         System.out.println("Sama besar");
    //     }
    // }

    // public static int compare1(int a, int b) {
    //     if(a > b) {
    //         return 1;
    //     } else if(b > a){
    //         return 2;
    //     } else {
    //         return 0;
    //     }
    }
}