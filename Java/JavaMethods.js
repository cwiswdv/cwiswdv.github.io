import React, { useState } from 'react';

// Main App Component
const App = () => {
    // State to manage the currently active page/section
    const [currentPage, setCurrentPage] = useState('1'); // Default to the first section

    // Navigation items
    const navItems = [
        { id: '1', title: 'Basic Method Definition' },
        { id: '2', title: 'Method with Parameters and Return Value' },
        { id: '3', title: 'Static Methods' },
        { id: '4', title: 'Abstract Methods' },
        { id: '5', title: 'Overriding Methods' },
        { id: '6', title: 'Preventing Overriding' },
        { id: '7', title: 'Optional Parameters (C# only)' },
        { id: '8', title: 'out and ref Parameters (C# only)' },
        { id: '9', title: 'Extension Methods (C# only)' },
        { id: '10', title: 'Delegates (C#) vs. Functional Interfaces (Java)' },
    ];

    // Component to render a code block
    const CodeBlock = ({ language, code }) => (
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-inner text-sm font-mono leading-relaxed">
            <code className={`language-${language}`}>{code}</code>
        </pre>
    );

    // Component for Section 1: Basic Method Definition
    const BasicMethodDefinition = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Basic Method Definition</h2>
            <p className="text-gray-700">A simple method that takes no arguments and returns no value.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java</h3>
                    <CodeBlock
                        language="java"
                        code={`public class MyClass {
    // Public method that prints a message
    public void greet() {
        System.out.println("Hello from Java!");
    }

    // Default (package-private) method
    void doSomething() {
        System.out.println("Doing something in Java.");
    }
}`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public class MyClass
{
    // Public method that prints a message
    public void Greet()
    {
        Console.WriteLine("Hello from C#!", "MyClass");
    }

    // Default (private) method
    void DoSomething() // This method is private by default
    {
        Console.WriteLine("Doing something in C#.");
    }
}`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>C# typically uses PascalCase for method names (`Greet`), while Java often uses camelCase (`greet`).</li>
                    <li>Default access modifier in Java is `package-private`. Default in C# is `private`.</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 2: Method with Parameters and Return Value
    const MethodWithParameters = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Method with Parameters and Return Value</h2>
            <p className="text-gray-700">A method that accepts multiple parameters and returns a value.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java</h3>
                    <CodeBlock
                        language="java"
                        code={`public class Calculator {
    /**
     * Adds two integers and returns the sum.
     * @param a The first integer.
     * @param b The second integer.
     * @return The sum of a and b.
     */
    public int add(int a, int b) {
        return a + b;
    }

    /**
     * Calculates the area of a rectangle.
     * @param length The length of the rectangle.
     * @param width The width of the rectangle.
     * @return The area as a double.
     */
    public double calculateArea(double length, double width) {
        return length * width;
    }
}`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public class Calculator
{
    /// <summary>
    /// Adds two integers and returns the sum.
    /// </summary>
    /// <param name="a">The first integer.</param>
    /// <param name="b">The second integer.</param>
    /// <returns>The sum of a and b.</returns>
    public int Add(int a, int b)
    {
        return a + b;
    }

    /// <summary>
    /// Calculates the area of a rectangle.
    /// </summary>
    /// <param name="length">The length of the rectangle.</param>
    /// <param name="width">The width of the rectangle.</param>
    /// <returns>The area as a double.</returns>
    public double CalculateArea(double length, double width)
    {
        return length * width;
    }
}`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Both use similar syntax for defining parameters and specifying return types.</li>
                    <li>Java uses Javadoc comments (`/** ... */`) for documentation, while C# uses XML documentation comments (`/// ...`).</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 3: Static Methods
    const StaticMethods = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Static Methods</h2>
            <p className="text-gray-700">Methods that belong to the class itself, not to an instance of the class. They can be called directly on the class name.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java</h3>
                    <CodeBlock
                        language="java"
                        code={`public class MathUtils {
    /**
     * Returns the maximum of two integers.
     * @param a The first integer.
     * @param b The second integer.
     * @return The larger of a and b.
     */
    public static int max(int a, int b) {
        return Math.max(a, b);
    }
}

// Usage:
// int result = MathUtils.max(10, 20);`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public static class MathUtils // C# allows static classes
{
    /// <summary>
    /// Returns the maximum of two integers.
    /// </summary>
    /// <param name="a">The first integer.</param>
    /// <param name="b">The second integer.</param>
    /// <returns>The larger of a and b.</returns>
    public static int Max(int a, int b)
    {
        return Math.Max(a, b);
    }
}

// Usage:
// int result = MathUtils.Max(10, 20);`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Both use the `static` keyword.</li>
                    <li>C# has `static` classes, which can only contain static members. Java doesn't have `static` classes in the same way (though nested classes can be static).</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 4: Abstract Methods
    const AbstractMethods = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Abstract Methods</h2>
            <p className="text-gray-700">Methods declared in an `abstract` class without an implementation. Subclasses are responsible for providing the implementation.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java</h3>
                    <CodeBlock
                        language="java"
                        code={`public abstract class Shape {
    private String name;

    public Shape(String name) {
        this.name = name;
    }

    /**
     * Returns the name of the shape.
     */
    public String getName() {
        return name;
    }

    /**
     * Abstract method to calculate the area.
     * Must be implemented by concrete subclasses.
     * @return The area of the shape.
     */
    public abstract double calculateArea();
}

public class Circle extends Shape {
    private double radius;

    public Circle(String name, double radius) {
        super(name);
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public abstract class Shape
{
    private string name;

    public Shape(string name)
    {
        this.name = name;
    }

    /// <summary>
    /// Returns the name of the shape.
    /// </summary>
    public string Name
    {
        get { return name; }
    }

    /// <summary>
    /// Abstract method to calculate the area.
    /// Must be implemented by concrete subclasses.
    /// </summary>
    /// <returns>The area of the shape.</returns>
    public abstract double CalculateArea();
}

public class Circle : Shape // Inheritance uses ':' in C#
{
    private double radius;

    public Circle(string name, double radius) : base(name) // Calling base constructor
    {
        this.radius = radius;
    }

    public override double CalculateArea() // 'override' keyword is mandatory
    {
        return Math.PI * radius * radius;
    }
}`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Both use the `abstract` keyword.</li>
                    <li>Java uses `extends` for inheritance, C# uses `:`.</li>
                    <li>In Java, methods are virtual by default, so you just re-declare the method (with `@Override` annotation). In C#, you **must** use the `override` keyword for implementation.</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 5: Overriding Methods
    const OverridingMethods = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Overriding Methods</h2>
            <p className="text-gray-700">How subclasses provide their own implementation for a method defined in a superclass.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java</h3>
                    <CodeBlock
                        language="java"
                        code={`public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound.");
    }
}

public class Dog extends Animal {
    @Override // Optional but recommended
    public void makeSound() {
        System.out.println("Dog barks: Woof! Woof!");
    }
}`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public class Animal
{
    // The method must be marked 'virtual' to be overridden
    public virtual void MakeSound()
    {
        Console.WriteLine("Animal makes a sound.");
    }
}

public class Dog : Animal
{
    // The overriding method must be marked 'override'
    public override void MakeSound()
    {
        Console.WriteLine("Dog barks: Woof! Woof!");
    }
}`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>**Crucial Difference:** Java methods are `virtual` by default. C# methods are `sealed` by default (cannot be overridden) and must be explicitly marked `virtual` to allow overriding.</li>
                    <li>Both languages allow calling the base method using `super.method()` (Java) or `base.Method()` (C#).</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 6: Preventing Overriding
    const PreventingOverriding = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Preventing Overriding</h2>
            <p className="text-gray-700">How to prevent a method from being overridden in derived classes.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java</h3>
                    <CodeBlock
                        language="java"
                        code={`public class FinalClass {
    // This method cannot be overridden by any subclass
    public final void cannotOverrideMe() {
        System.out.println("This method is final in Java.");
    }
}

// Example of trying to override (would cause compile error)
/*
public class ChildOfFinal extends FinalClass {
    // @Override
    // public void cannotOverrideMe() { // ERROR: cannot override final method
    //     System.out.println("Trying to override...");
    // }
}
*/`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public class BaseClass
{
    // Mark as virtual to allow initial overriding
    public virtual void AllowInitialOverride()
    {
        Console.WriteLine("This method can be overridden once.");
    }
}

public class IntermediateClass : BaseClass
{
    // Mark as sealed override to prevent further overriding
    public sealed override void AllowInitialOverride()
    {
        Console.WriteLine("This method is sealed (cannot be overridden further) in C#.");
    }
}

// Example of trying to override further (would cause compile error)
/*
public class DerivedFromIntermediate : IntermediateClass
{
    // public override void AllowInitialOverride() // ERROR: 'IntermediateClass.AllowInitialOverride()' cannot be overridden because it is sealed
    // {
    //     Console.WriteLine("Trying to override sealed method...");
    // }
}
*/`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Java uses `final` to directly prevent overriding from the point of declaration.</li>
                    <li>C# uses `sealed` on an `override` method to prevent *further* overriding down the inheritance chain. The base method still needs to be `virtual`.</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 7: Optional Parameters (C# only)
    const OptionalParameters = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Optional Parameters (C# only)</h2>
            <p className="text-gray-700">C# allows defining parameters with default values, making them optional for the caller. Java does not have this feature directly.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java (achieved via Method Overloading)</h3>
                    <CodeBlock
                        language="java"
                        code={`public class Greeter {
    public void greet(String name) {
        greet(name, "Hello"); // Call the overloaded method with default greeting
    }

    public void greet(String name, String greeting) {
        System.out.println(greeting + ", " + name + "!");
    }
}

// Usage:
// Greeter g = new Greeter();
// g.greet("Alice");           // Output: Hello, Alice!
// g.greet("Bob", "Hi");       // Output: Hi, Bob!`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public class Greeter
{
    public void Greet(string name, string greeting = "Hello") // 'greeting' is optional
    {
        Console.WriteLine($"{greeting}, {name}!");
    }
}

// Usage:
// Greeter g = new Greeter();
// g.Greet("Alice");           // Output: Hello, Alice!
// g.Greet("Bob", "Hi");       // Output: Hi, Bob!
// g.Greet(greeting: "Greetings", name: "Charlie"); // Using named arguments`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>C# provides `optional parameters` directly.</li>
                    <li>Java achieves similar functionality through `method overloading` (creating multiple methods with the same name but different parameter lists) or by using patterns like the Builder pattern for complex configurations.</li>
                    <li>C# also supports `named arguments` which can be used with optional parameters or any parameters to specify arguments by name, improving readability.</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 8: out and ref Parameters (C# only)
    const OutRefParameters = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. `out` and `ref` Parameters (C# only)</h2>
            <p className="text-gray-700">C# provides `out` and `ref` keywords to pass arguments by reference. Java is strictly pass-by-value (even for objects, the reference itself is passed by value).</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java (achieved via returning an object or mutable data structure)</h3>
                    <CodeBlock
                        language="java"
                        code={`public class MathOperations {
    // Method to calculate quotient and remainder
    // Returns them wrapped in a custom Result object
    public Result divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero.");
        }
        return new Result(a / b, a % b);
    }

    // Helper class to hold multiple return values
    public static class Result {
        public final int quotient;
        public final int remainder;

        public Result(int quotient, int remainder) {
            this.quotient = quotient;
            this.remainder = remainder;
        }
    }
}

// Usage:
// MathOperations mo = new MathOperations();
// MathOperations.Result divisionResult = mo.divide(10, 3);
// System.out.println("Quotient: " + divisionResult.quotient + ", Remainder: " + divisionResult.remainder);`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public class MathOperations
{
    // 'out' parameters for returning multiple values
    public void Divide(int a, int b, out int quotient, out int remainder)
    {
        if (b == 0)
        {
            throw new ArgumentException("Cannot divide by zero.", nameof(b));
        }
        quotient = a / b;
        remainder = a % b;
    }

    // 'ref' parameter: original value can be modified
    public void Increment(ref int value)
    {
        value++;
    }
}

// Usage:
// MathOperations mo = new MathOperations();
// int q, r; // 'out' parameters do not need to be initialized before passing
// mo.Divide(10, 3, out q, out r);
// Console.WriteLine($"Quotient: {q}, Remainder: {r}");

// int num = 5;
// mo.Increment(ref num); // 'ref' parameter must be initialized before passing
// Console.WriteLine($"Incremented num: {num}"); // Output: 6`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>`out` parameters in C# are useful when a method needs to return multiple values. The caller must declare the variables and pass them with the `out` keyword. The method must assign values to all `out` parameters before returning.</li>
                    <li>`ref` parameters in C# allow a method to modify the value of a variable passed from the caller. The variable must be initialized before being passed.</li>
                    <li>Java typically handles multiple return values by encapsulating them in a custom object or using mutable collection types.</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 9: Extension Methods (C# only)
    const ExtensionMethods = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Extension Methods (C# only)</h2>
            <p className="text-gray-700">A C# feature that allows you to add methods to existing types without modifying the original type. Java has no direct equivalent, though utility classes provide similar functionality.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java (achieved via Utility Class)</h3>
                    <CodeBlock
                        language="java"
                        code={`public class StringUtils {
    public static int countWords(String str) {
        if (str == null || str.trim().isEmpty()) {
            return 0;
        }
        return str.trim().split("\\\\s+").length;
    }
}

// Usage:
// String sentence = "Hello world, how are you?";
// int count = StringUtils.countWords(sentence);
// System.out.println("Word count: " + count);`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`public static class StringExtensions // Extension methods must be in a static class
{
    // 'this' keyword on the first parameter indicates it's an extension method
    public static int WordCount(this string str)
    {
        if (string.IsNullOrWhiteSpace(str))
        {
            return 0;
        }
        return str.Split(new char[] { ' ', '\\t', '\\n', '\\r' },
                         StringSplitOptions.RemoveEmptyEntries).Length;
    }
}

// Usage:
// string sentence = "Hello world, how are you?";
// int count = sentence.WordCount(); // Called as if it's a method on the string object
// Console.WriteLine($"Word count: {count}");`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Extension methods in C# enhance existing types, making the code more readable and object-oriented by appearing as if they are part of the original class.</li>
                    <li>Java would use a static utility class where the string object is passed as a regular argument.</li>
                </ul>
            </div>
        </div>
    );

    // Component for Section 10: Delegates (C#) vs. Functional Interfaces / Method References (Java)
    const DelegatesFunctionalInterfaces = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Delegates (C#) vs. Functional Interfaces / Method References (Java)</h2>
            <p className="text-gray-700">Handling functions as first-class citizens for callbacks and events.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-blue-700 mb-3">Java (Functional Interfaces & Method References)</h3>
                    <CodeBlock
                        language="java"
                        code={`import java.util.function.Consumer;

public class EventPublisher {
    private Consumer<String> messageHandler;

    public void setMessageHandler(Consumer<String> handler) {
        this.messageHandler = handler;
    }

    public void publishMessage(String message) {
        if (messageHandler != null) {
            messageHandler.accept(message);
        }
    }
}

public class EventSubscriber {
    public void handleMessage(String message) {
        System.out.println("Java Subscriber received: " + message);
    }

    public static void staticHandleMessage(String message) {
        System.out.println("Java Static Subscriber received: " + message);
    }

    public static void main(String[] args) {
        EventPublisher publisher = new EventPublisher();
        EventSubscriber subscriber = new EventSubscriber();

        // Using a lambda expression
        publisher.setMessageHandler(msg -> System.out.println("Java Lambda received: " + msg));
        publisher.publishMessage("Hello from lambda!");

        // Using a method reference (instance method)
        publisher.setMessageHandler(subscriber::handleMessage);
        publisher.publishMessage("Hello from instance method reference!");

        // Using a method reference (static method)
        publisher.setMessageHandler(EventSubscriber::staticHandleMessage);
        publisher.publishMessage("Hello from static method reference!");
    }
}`}
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-medium text-purple-700 mb-3">C#</h3>
                    <CodeBlock
                        language="csharp"
                        code={`using System;

// 1. Declare a delegate type (defines the signature of the methods it can point to)
public delegate void MessageHandler(string message);

public class EventPublisher
{
    // 2. Declare an event based on the delegate type
    public event MessageHandler OnMessage;

    public void PublishMessage(string message)
    {
        // 3. Invoke the event (which will call all subscribed methods)
        OnMessage?.Invoke(message); // The '?.' is null-conditional operator (thread-safe invocation)
    }
}

public class EventSubscriber
{
    public void HandleMessage(string message)
    {
        Console.WriteLine($"C# Subscriber received: {message}");
    }

    public static void StaticHandleMessage(string message)
    {
        Console.WriteLine($"C# Static Subscriber received: {message}");
    }

    public static void Main(string[] args)
    {
        EventPublisher publisher = new EventPublisher();
        EventSubscriber subscriber = new EventSubscriber();

        // 4. Subscribe methods to the event
        publisher.OnMessage += subscriber.HandleMessage; // Add instance method
        publisher.OnMessage += StaticHandleMessage;      // Add static method
        publisher.OnMessage += (msg) => Console.WriteLine($"C# Lambda received: {msg}"); // Add a lambda expression

        publisher.PublishMessage("Hello from events!");

        publisher.OnMessage -= subscriber.HandleMessage; // Unsubscribe
        publisher.PublishMessage("Hello again!"); // Subscriber's instance method won't be called
    }
}`}
                    />
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>C# uses `delegates` as type-safe function pointers, which are often wrapped in `events` for publisher-subscriber patterns.</li>
                    <li>Java uses `functional interfaces` (interfaces with a single abstract method) combined with `lambda expressions` or `method references` to achieve similar functionality, treating functions as first-class citizens since Java 8. The `java.util.function` package provides common functional interfaces like `Consumer`, `Function`, `Predicate`, etc.</li>
                </ul>
            </div>
        </div>
    );


    // Function to render the current page based on state
    const renderPage = () => {
        switch (currentPage) {
            case '1':
                return <BasicMethodDefinition />;
            case '2':
                return <MethodWithParameters />;
            case '3':
                return <StaticMethods />;
            case '4':
                return <AbstractMethods />;
            case '5':
                return <OverridingMethods />;
            case '6':
                return <PreventingOverriding />;
            case '7':
                return <OptionalParameters />;
            case '8':
                return <OutRefParameters />;
            case '9':
                return <ExtensionMethods />;
            case '10':
                return <DelegatesFunctionalInterfaces />;
            default:
                return <BasicMethodDefinition />;
        }
    };

    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col lg:flex-row">
            {/* Navigation Sidebar */}
            <nav className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 shadow-lg lg:w-1/4 flex flex-col text-white rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none lg:rounded-tr-3xl">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    <span className="block">Java vs. C#</span>
                    <span className="block text-xl font-light">Method Syntax</span>
                </h1>
                <ul className="space-y-3 flex-grow overflow-y-auto">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setCurrentPage(item.id)}
                                className={`w-full text-left py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
                                    currentPage === item.id
                                        ? 'bg-blue-300 text-blue-900 font-semibold shadow-inner'
                                        : 'hover:bg-blue-600 text-blue-100 hover:text-white'
                                }`}
                            >
                                {item.id}. {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 text-center text-sm text-blue-200">
                    <p>&copy; 2024 Method Comparison</p>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    {renderPage()}
                </div>
            </main>
        </div>
    );
};

export default App;
