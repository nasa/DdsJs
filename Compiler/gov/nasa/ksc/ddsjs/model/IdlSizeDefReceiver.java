/**
 * @file IdlSizeDefReceiver.java
 * @brief Defines the interface to receive size definitions (for array, sequence, and string types)
 * @date 2017-06-07 12:41:45
 * @author Rolando J. Nieves
 */

package gov.nasa.ksc.ddsjs.model;

public interface IdlSizeDefReceiver {
    public void setSizeDefinition(Object sizeDefinition);
}
